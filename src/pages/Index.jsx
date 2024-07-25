import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Palestine</h1>
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
