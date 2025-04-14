"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { User, Crown, CheckCircle2 } from "lucide-react";

const RoleSelectionPage = () => {
  const router = useRouter();

  const handleRoleSelect = (role: "candidate" | "interviewer") => {
    // Here you would set the user's role and redirect them
    console.log(`Selected role: ${role}`);
    // router.push("/dashboard");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-4 animate-in fade-in duration-700">
      <h1 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-500">Choose Your Role</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Candidate Card */}
        <Card 
          className="relative overflow-hidden border-0 shadow-xl transition-all duration-300 hover:shadow-2xl hover:translate-y-[-5px] group cursor-pointer"
          onClick={() => handleRoleSelect("candidate")}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-700/30 dark:from-blue-700/30 dark:to-blue-900/40 opacity-70 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative p-8 flex flex-col items-center">
            <div className="rounded-full p-5 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 mb-6 shadow-md group-hover:shadow-blue-500/20 transition-all duration-300">
              <User className="h-10 w-10" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Candidate</h2>
            <p className="text-muted-foreground text-center mb-6">Practice interviews and improve your skills</p>
            
            <div className="w-full space-y-3 mb-6">
              <Feature text="Practice technical interviews" />
              <Feature text="Get feedback on your performance" />
              <Feature text="Build confidence for real interviews" />
            </div>
            
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white border-0 shadow-lg hover:shadow-xl" size="lg">
              Select Candidate
            </Button>
          </div>
        </Card>
        
        {/* Interviewer Card */}
        <Card 
          className="relative overflow-hidden border-0 shadow-xl transition-all duration-300 hover:shadow-2xl hover:translate-y-[-5px] group cursor-pointer"
          onClick={() => handleRoleSelect("interviewer")}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-purple-700/30 dark:from-purple-700/30 dark:to-purple-900/40 opacity-70 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative p-8 flex flex-col items-center">
            <div className="rounded-full p-5 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 mb-6 shadow-md group-hover:shadow-purple-500/20 transition-all duration-300">
              <Crown className="h-10 w-10" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Interviewer</h2>
            <p className="text-muted-foreground text-center mb-6">Conduct interviews and help others grow</p>
            
            <div className="w-full space-y-3 mb-6">
              <Feature text="Help candidates improve their skills" />
              <Feature text="Gain experience as an interviewer" />
              <Feature text="Build your professional network" />
            </div>
            
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white border-0 shadow-lg hover:shadow-xl" size="lg">
              Select Interviewer
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

const Feature = ({ text }: { text: string }) => (
  <div className="flex items-center gap-2">
    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary" />
    <span className="text-sm">{text}</span>
  </div>
);

interface RoleCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const RoleCard = ({ title, description, icon, onClick }: RoleCardProps) => {
  return (
    <Card 
      className="flex flex-col items-center p-6 hover:shadow-lg transition-all cursor-pointer border-2 hover:border-primary group"
      onClick={onClick}
    >
      <div className="rounded-full p-4 bg-secondary text-secondary-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
        {icon}
      </div>
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-muted-foreground text-center">{description}</p>
      <Button className="mt-6 w-full" size="lg">
        Select {title}
      </Button>
    </Card>
  );
};

export default RoleSelectionPage;