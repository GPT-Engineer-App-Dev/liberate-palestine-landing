import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const Index = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">Palestine</h1>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>Key information about Palestine</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Palestine is a region in the Middle East, located between the Mediterranean Sea and the Jordan River. It has a rich history and cultural significance for multiple religions and peoples.
          </p>
          <ul className="list-disc pl-6">
            <li>Capital: East Jerusalem (disputed)</li>
            <li>Population: Approximately 5 million</li>
            <li>Languages: Arabic (official), Hebrew, English</li>
            <li>Religion: Predominantly Islam, with Christian and Jewish minorities</li>
          </ul>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Geography</CardTitle>
          </CardHeader>
          <CardContent>
            <img src="/placeholder.svg" alt="Map of Palestine" className="mx-auto object-cover w-full h-[200px] mb-4 rounded-lg" />
            <p>Palestine is divided into two main areas:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>West Bank</li>
              <li>Gaza Strip</li>
            </ul>
            <p className="mt-2">The region features diverse landscapes, including Mediterranean coastline, hills, and desert areas.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Culture</CardTitle>
          </CardHeader>
          <CardContent>
            <img src="/placeholder.svg" alt="Palestinian cultural scene" className="mx-auto object-cover w-full h-[200px] mb-4 rounded-lg" />
            <p>Palestinian culture is rich and diverse, influenced by various civilizations throughout history. Key aspects include:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Traditional music and dance (e.g., Dabke)</li>
              <li>Cuisine (e.g., Falafel, Hummus, Maqluba)</li>
              <li>Literature and poetry</li>
              <li>Handcrafts (e.g., embroidery, pottery)</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Historical Sites</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <img src="/placeholder.svg" alt="Dome of the Rock" className="mx-auto object-cover w-full h-[150px] rounded-lg" />
              <img src="/placeholder.svg" alt="Church of the Nativity" className="mx-auto object-cover w-full h-[150px] rounded-lg" />
              <img src="/placeholder.svg" alt="Old City of Jerusalem" className="mx-auto object-cover w-full h-[150px] rounded-lg" />
            </div>
            <p className="mt-4">Palestine is home to numerous historical and religious sites of great significance to multiple faiths.</p>
          </CardContent>
        </Card>
      </div>

      <Separator className="my-8" />

      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          This is a brief overview. For more detailed and up-to-date information, please consult academic sources or official publications.
        </p>
      </div>
    </div>
  );
};

export default Index;
