import ClientProfile from "./ClientProfile";

async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function ProfilePage() {
  await delay(2000);

  return <ClientProfile />;
}
