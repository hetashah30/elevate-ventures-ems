import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ReactNode } from "react";

interface TabLayoutProps {
  loginContent: ReactNode;
  registerContent: ReactNode;
  defaultTab?: string;
}

export function TabLayout({
  loginContent,
  registerContent,
  defaultTab = "login",
}: TabLayoutProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="w-full max-w-md mx-auto shadow-xl">
        <Tabs defaultValue={defaultTab} className="relative">
          <TabsList className="grid grid-cols-2 bg-muted/50 p-1">
            <TabsTrigger
              id="login-tab"
              value="login"
              className="data-[state=active]:bg-white data-[state=active]:text-elevate-purple"
            >
              Login
            </TabsTrigger>
            <TabsTrigger
              value="register"
              className="data-[state=active]:bg-white data-[state=active]:text-elevate-purple"
            >
              Register
            </TabsTrigger>
          </TabsList>

          <TabsContent value="login" className="space-y-4 p-3">
            {loginContent}
          </TabsContent>

          <TabsContent value="register" className="space-y-4 p-3">
            {registerContent}
          </TabsContent>
        </Tabs>
      </Card>
    </motion.div>
  );
}
