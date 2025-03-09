import Image from "next/image";
import ClientComponent from "./page-client";

export default function Home() {
    return (
        <>
            <h1 className="p-4 text-4xl text-blue-700">Prisma Crash Course with PostgreSQL</h1>
            <ClientComponent/>
        </>
    );
}
