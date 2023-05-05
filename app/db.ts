const db: string[] = [];

export async function list() {
  return [...db];
}

export async function append(item: string) {
  db.push(item + `-${db.length}`);
}
