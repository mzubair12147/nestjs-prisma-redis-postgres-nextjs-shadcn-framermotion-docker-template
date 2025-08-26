import { Card, CardContent } from "@/components/ui/card";
import AnimatedHeading from "../components/AnimatedHeading";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-200">
      <Card className="p-10 shadow-lg">
        <CardContent className="text-center space-y-4">
          <AnimatedHeading />
          <p className="text-gray-600 text-lg">
            NestJS + Next.js + Prisma + Redis + shadcn/ui 🚀
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
