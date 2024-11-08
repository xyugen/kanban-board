
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SignInForm from "../_components/forms/signin-form";
import SignUpForm from "../_components/forms/signup-form";

const Page = () => {

  return (
    <div className="flex justify-center">
        <Tabs defaultValue="signin" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin">Sign in</TabsTrigger>
            <TabsTrigger value="signup">Sign up</TabsTrigger>
          </TabsList>
          <TabsContent value="signin">
            <Card>
              <CardHeader>
                <CardDescription>
                  Sign in to manage your tasks and projects on the Kanban Board.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <SignInForm />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="signup">
            <Card>
              <CardHeader>
                <CardDescription>
                  Sign up to start managing tasks and projects on your Kanban
                  Board.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <SignUpForm />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
    </div>
  );
};

export default Page;
