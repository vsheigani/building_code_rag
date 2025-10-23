import type { Message } from "@/clients/types.gen";
import "./App.css";
import ky from "ky";
import { useSignal } from "@preact/signals";
import { Input } from "@/components/ui/input";
import {
	Item,
	ItemContent,
	ItemDescription,
	ItemTitle,
} from "./components/ui/item";
import { Button } from "@/components/ui/button";
function App() {
	const inputValue = useSignal("");
	const messages = useSignal<Message[]>([]);

	const fetchMessages = async (el: HTMLButtonElement): Promise<void> => {
		const messagesResponse = await ky
			.get("/api/v1/messages", {
				hooks: {
					beforeRequest: [
						() => {
							el.disabled = true;
							el.textContent = "Fetching...";
						},
					],
				},
			})
			.then(async (messagesResponse) => {
				if (!messagesResponse.ok) {
					return await messagesResponse.json<Message[]>();
				}
				return messagesResponse.json<Message[]>();
			})
			.catch((error) => {
				console.error(error);
				return [
					{
						id: "1",
						message: error.message ?? "Unknown error",
						created_at: new Date().toISOString(),
						updated_at: new Date().toISOString(),
					},
				];
			})
			.finally(() => {
				el.disabled = false;
				el.textContent = "Fetch Messages";
			});
		messages.value = messagesResponse;
	};

	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<h1>Vite + React</h1>
			<div className="card flex flex-col items-center justify-center gap-4">
				<Button
					onClick={(e): Promise<void> =>
						fetchMessages(e.target as HTMLButtonElement)
					}
				>
					Fetch Messages
				</Button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>

			<Input
				placeholder="Type something..."
				value={inputValue.value}
				onInput={(e) => {
					const target = e.target as HTMLInputElement;
					inputValue.value = target.value;
				}}
			/>
			<p>Input value: {inputValue.value}</p>
			<div>
				{messages.value.map((message: Message) => (
					<Item variant="outline" key={message.id?.toString()} className="my-4">
						<ItemContent>
							<ItemTitle>{message.message}</ItemTitle>
							<ItemDescription>
								{message.created_at?.toString()}
							</ItemDescription>
							<ItemDescription>
								{message.updated_at?.toString()}
							</ItemDescription>
						</ItemContent>
					</Item>
				))}
			</div>
		</div>
	);
}

export default App;
