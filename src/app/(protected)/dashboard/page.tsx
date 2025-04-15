"use client";

import { useUserRole } from "@/hooks/useUserRole";
import React, { useState, useEffect } from "react";
import { QUICK_ACTIONS } from "@/app/constants";
import ActionCard from "@/components/ActionCard";
import { useQuery } from "convex/react";
import { api } from "@/../../convex/_generated/api";
import { useRouter } from "next/navigation";
import MeetingModal from "@/components/MeetingModal";
import LoaderUI from "@/components/LoaderUI";
import { Loader2Icon, Code, Users, Calendar, Clock } from "lucide-react";
import MeetingCard from "@/components/MeetingCard";
import { useUser } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import BarChartIcon from "@/components/icons/BarChartIcon";

export default function Dashboard() {
  const { user, isSignedIn } = useUser();
  const router = useRouter();
  const { isInterviewer, isCandidate, isLoading } = useUserRole();
  const interviews = useQuery(api.interviews.getMyInterviews);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<string>("");
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Debug user role states
  useEffect(() => {
    console.log("Dashboard access - User state:", { 
      isSignedIn, 
      firstName: user?.firstName,
      isInterviewer, 
      isCandidate, 
      isLoading 
    });
  }, [isSignedIn, user, isInterviewer, isCandidate, isLoading]);

  // Show loading state only while getting user role data
  // Add a timeout to prevent indefinite loading
  const [showSpinner, setShowSpinner] = useState(true);
  
  useEffect(() => {
    // Only show spinner for a maximum of 5 seconds to prevent indefinite loading
    const timer = setTimeout(() => {
      setShowSpinner(false);
    }, 5000);
    
    // If data is loaded, clear the timer and don't show spinner
    if (!isLoading) {
      setShowSpinner(false);
      clearTimeout(timer);
    }
    
    return () => clearTimeout(timer);
  }, [isLoading]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (showSpinner && isLoading) return <LoaderUI />;

  const firstName = user?.firstName || "";

  const handleQuickAction = (title: string) => {
    switch (title) {
      case "New Call":
        setModalType("start");
        setShowModal(true);
        break;
      case "Join Interview":
        setModalType("join");
        setShowModal(true);
        break;
      default:
        router.push(`/${title.toLowerCase()}`);
    }
  };

  // Define custom cards with specific styling for light/dark modes
  const actionCards = [
    {
      title: "New Call",
      description: "Start an instant call",
      icon: <Code className="h-6 w-6" />,
      className: "bg-gray-200 hover:bg-gray-300 dark:bg-zinc-900/90 dark:hover:bg-zinc-800/90 text-gray-900 dark:text-gray-100 border-gray-200 dark:border-zinc-800",
      iconClassName: "bg-gray-300 dark:bg-zinc-800"
    },
    {
      title: "Join Interview",
      description: "Enter via invitation link",
      icon: <Users className="h-6 w-6" />,
      className: "bg-purple-200 hover:bg-purple-300 dark:bg-purple-900/50 dark:hover:bg-purple-900/70 text-purple-900 dark:text-purple-100 border-purple-200 dark:border-purple-800",
      iconClassName: "bg-purple-300 dark:bg-purple-800"
    },
    {
      title: "Schedule",
      description: "Plan upcoming interviews",
      icon: <Calendar className="h-6 w-6" />,
      className: "bg-blue-200 hover:bg-blue-300 dark:bg-blue-900/50 dark:hover:bg-blue-900/70 text-blue-900 dark:text-blue-100 border-blue-200 dark:border-blue-800",
      iconClassName: "bg-blue-300 dark:bg-blue-800"
    },
    {
      title: "Recordings",
      description: "Access past interviews",
      icon: <Clock className="h-6 w-6" />,
      className: "bg-amber-200 hover:bg-amber-300 dark:bg-amber-900/50 dark:hover:bg-amber-900/70 text-amber-900 dark:text-amber-100 border-amber-200 dark:border-amber-800",
      iconClassName: "bg-amber-300 dark:bg-amber-800"
    }
  ];

  return (
    <>
    <div className="container max-w-7xl mx-auto p-6">
      <div className="rounded-lg bg-card p-6 border shadow-sm mb-10">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div className="text-center sm:text-left">
            <h1 className={`text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent ${
              mounted && resolvedTheme === "dark" 
                ? "bg-gradient-to-r from-white to-gray-600" 
                : "bg-gradient-to-r from-black to-gray-600"
            }`}>
              Welcome back{firstName ? `, ${firstName}` : ""}!
            </h1>
            <p className="text-muted-foreground mt-2">
              {isInterviewer 
                ? "Manage your interviews and review candidates effectively" 
                : "Access your upcoming interviews and preparations"}
            </p>
          </div>
          {isInterviewer && (
            <Button asChild className="w-full sm:w-auto font-medium text-base">
              <Link href="/interviews" className="flex items-center justify-center gap-2">
                <BarChartIcon className="h-5 w-5" />
                Interviews
              </Link>
            </Button>
          )}
        </div>
      </div>
      <p className="text-muted-foreground mt-2">
        {isInterviewer ? (
          <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {actionCards.map((action) => (
                <div 
                  key={action.title} 
                  className={`cursor-pointer rounded-xl p-6 border shadow-sm transition-all ${action.className}`}
                  onClick={() => handleQuickAction(action.title)}
                >
                  <div className={`h-12 w-12 rounded-full ${action.iconClassName} flex items-center justify-center mb-4`}>
                    {action.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{action.title}</h3>
                  <p className="mt-1 opacity-80">{action.description}</p>
                </div>
              ))}
            </div>

            <MeetingModal
              isOpen={showModal}
              onClose={() => setShowModal(false)}
              title={modalType === "join" ? "Join Meeting" : "Start Meeting"}
              isJoinMeeting={modalType === "join"}
            />
          </>
        ) : (
          <>
          <div>
            <h1 className="text-3xl font-bold">Your Interview</h1>
            <p className="text-muted-foreground mt-1">View and join your schedule interview</p>
          </div>
          <div className="mt-8">
            {interviews === undefined ? (
              <div className="flex justify-center py-12">
                <Loader2Icon className="h-8 w-8 animate-spin text-muted-foreground" />
              </div>
            ) : interviews.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {interviews.map((interview) => (
                  <MeetingCard key={interview._id} interview={interview} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-muted-foreground">
              You have no scheduled interviews at the moment
            </div>
            )}
          </div>
          </>
        )}
      </p>
    </div>
    </>
  );
}