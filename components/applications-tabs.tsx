"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Image from "next/image";

type Application = {
  key: string;
  image: string;
  title: string;
  description: string;
  examples: string[];
};

type ApplicationsTabsProps = {
  applications: Application[];
};

export function ApplicationsTabs({ applications }: ApplicationsTabsProps) {
  const [tab, setTab] = useState(applications[0]?.key ?? "");

  return (
    <Tabs value={tab} onValueChange={setTab}>
      <div className="flex justify-center mb-12">
        <TabsList className="bg-white p-1 rounded-full flex flex-wrap gap-2">
          {applications.map((app) => (
            <TabsTrigger
              key={app.key}
              value={app.key}
              className="rounded-full px-6 py-2 font-medium data-[state=active]:bg-background/10"
            >
              {app.title}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
      <div style={{ minHeight: 340, position: "relative" }}>
        {applications.map((app) => (
          <TabsContent
            key={app.key}
            value={app.key}
            className="mt-0 absolute left-0 top-0 w-full h-[340px] flex items-center justify-center"
          >
            <AnimatePresence mode="wait">
              {tab === app.key && (
                <motion.div
                  key={app.key}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  layout
                  className="h-full flex items-center justify-center"
                >
                  <Card className="w-max flex rounded-2xl mx-auto h-[300px]">
                    <div className="w-1/4 lg:block h-full">
                      <Image
                        src={app.image}
                        alt={app.title}
                        className="h-full object-cover rounded-tl-2xl rounded-bl-2xl"
                        width={300}
                        height={300}
                      />
                    </div>
                    <div className="flex flex-col justify-between h-full">
                      <CardHeader>
                        <CardTitle className="text-3xl text-regularblue font-adobetitre font-medium">
                          {app.title}
                        </CardTitle>
                        <CardDescription className="text-regularblue">
                          {app.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="h-full flex items-start gap-4 pl-2">
                          {app.examples.map((example) => (
                            <div
                              key={example}
                              className="w-max font-adobetitre text-regularblue bg-lightblue/10 px-3 py-1 rounded-full"
                            >
                              {example}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
}