import { append, list } from "../db";
import { Button } from "./button";

export default async function Page() {
  const addItem = async () => {
    "use server";
    append("something new");
  };

  const items = await list();

  return (
    <div>
      <Button onClick={addItem}>Add item</Button>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
