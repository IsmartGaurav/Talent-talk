"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Briefcase, Check, Code, FileCheck, GraduationCap, MessagesSquare, Users, Video } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function HomePage() {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // After mounting, we can access the theme
    useEffect(() => {
        setMounted(true);
    }, []);

    // Get theme colors based on current theme
    const themeColors = mounted && (resolvedTheme === 'dark' || theme === 'dark')
        ? { highlightFrom: 'from-blue-400', highlightTo: 'to-violet-400' }
        : { highlightFrom: 'from-blue-500', highlightTo: 'to-violet-500' };

    return (
        <div className="container mx-auto px-4 py-12 space-y-16">
            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center text-center space-y-8 pt-10">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    Welcome to <span className={`bg-clip-text text-transparent bg-gradient-to-r ${themeColors.highlightFrom} ${themeColors.highlightTo}`}>Talent Talk</span>
                </h1>
                
                <p className="text-xl md:text-2xl max-w-2xl text-muted-foreground">
                    Your platform for talent discovery, growth, and seamless interview experiences.
                </p>
                
                <div className="flex flex-wrap gap-4 justify-center">
                    <Button size="lg" className="gap-2">
                        Get Started <ArrowRight className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="lg">
                        Learn More
                    </Button>
                </div>
            </section>

            {/* Features Section */}
            <section className="space-y-8">
                <h2 className="text-3xl font-bold text-center">Key Features</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="border border-border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
                        <CardContent className="p-6 space-y-4">
                            <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                <Users className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-semibold">Connect</h3>
                            <p className="text-muted-foreground">Connect with top talent and recruiters in your industry</p>
                        </CardContent>
                    </Card>

                    <Card className="border border-border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
                        <CardContent className="p-6 space-y-4">
                            <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                                <GraduationCap className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-semibold">Learn</h3>
                            <p className="text-muted-foreground">Access resources to improve your skills and knowledge</p>
                        </CardContent>
                    </Card>

                    <Card className="border border-border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
                        <CardContent className="p-6 space-y-4">
                            <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                                <Briefcase className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-semibold">Grow</h3>
                            <p className="text-muted-foreground">Take your career to the next level with our tools</p>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="space-y-10">
                <h2 className="text-3xl font-bold text-center">How It Works</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 order-2 lg:order-1">
                        <h3 className="text-2xl font-semibold">Streamlined Interview Process</h3>
                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                                    <Check className="h-4 w-4" />
                                </div>
                                <p className="text-lg">Schedule interviews with our simple calendar interface</p>
                            </li>
                            <li className="flex gap-3">
                                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                                    <Check className="h-4 w-4" />
                                </div>
                                <p className="text-lg">Join video calls directly from your browser</p>
                            </li>
                            <li className="flex gap-3">
                                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                                    <Check className="h-4 w-4" />
                                </div>
                                <p className="text-lg">Conduct coding interviews with our built-in editor</p>
                            </li>
                            <li className="flex gap-3">
                                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                                    <Check className="h-4 w-4" />
                                </div>
                                <p className="text-lg">Review recordings and feedback after the interview</p>
                            </li>
                        </ul>
                        <Button variant="outline" className="mt-4">Learn More About Our Process</Button>
                    </div>
                    <div className="relative h-80 lg:h-[450px] rounded-xl overflow-hidden shadow-lg order-1 lg:order-2">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 z-10 rounded-xl"></div>
                        <div className="absolute inset-0 bg-card/50 dark:bg-card/30 flex items-center justify-center">
                            <div className="w-full max-w-md p-6 rounded-xl bg-card/90 backdrop-blur-sm border border-border shadow-lg">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                                        <Video className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium">Interview with Sarah Johnson</h4>
                                        <p className="text-sm text-muted-foreground">Today at 3:00 PM</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-3 mt-4">
                                    <Button size="sm" className="w-full">Join Now</Button>
                                    <Button variant="outline" size="sm" className="w-full">Reschedule</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tools Section */}
            <section className="space-y-8">
                <h2 className="text-3xl font-bold text-center">Powerful Interview Tools</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card className="border border-border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
                        <CardContent className="p-6 space-y-4">
                            <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                <Video className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-semibold">HD Video Conferencing</h3>
                            <p className="text-muted-foreground">Crystal clear video and audio for seamless communication with candidates and teams.</p>
                            <ul className="space-y-2 mt-4">
                                <li className="flex gap-2 items-center">
                                    <Check className="h-4 w-4 text-green-500" />
                                    <span>Multi-participant support</span>
                                </li>
                                <li className="flex gap-2 items-center">
                                    <Check className="h-4 w-4 text-green-500" />
                                    <span>Screen sharing capabilities</span>
                                </li>
                                <li className="flex gap-2 items-center">
                                    <Check className="h-4 w-4 text-green-500" />
                                    <span>Recording features</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="border border-border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
                        <CardContent className="p-6 space-y-4">
                            <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                                <Code className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-semibold">Interactive Code Editor</h3>
                            <p className="text-muted-foreground">Evaluate technical skills in real-time with our collaborative code editor.</p>
                            <ul className="space-y-2 mt-4">
                                <li className="flex gap-2 items-center">
                                    <Check className="h-4 w-4 text-green-500" />
                                    <span>Real-time collaboration</span>
                                </li>
                                <li className="flex gap-2 items-center">
                                    <Check className="h-4 w-4 text-green-500" />
                                    <span>Syntax highlighting for multiple languages</span>
                                </li>
                                <li className="flex gap-2 items-center">
                                    <Check className="h-4 w-4 text-green-500" />
                                    <span>Code execution capabilities</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="border border-border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
                        <CardContent className="p-6 space-y-4">
                            <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                                <MessagesSquare className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-semibold">Feedback System</h3>
                            <p className="text-muted-foreground">Structured feedback collection for better evaluation and comparison.</p>
                            <ul className="space-y-2 mt-4">
                                <li className="flex gap-2 items-center">
                                    <Check className="h-4 w-4 text-green-500" />
                                    <span>Customizable evaluation criteria</span>
                                </li>
                                <li className="flex gap-2 items-center">
                                    <Check className="h-4 w-4 text-green-500" />
                                    <span>Team collaboration on feedback</span>
                                </li>
                                <li className="flex gap-2 items-center">
                                    <Check className="h-4 w-4 text-green-500" />
                                    <span>Historical data analysis</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="border border-border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
                        <CardContent className="p-6 space-y-4">
                            <div className="h-12 w-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
                                <FileCheck className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-semibold">Assessment Tools</h3>
                            <p className="text-muted-foreground">Comprehensive assessment tools to evaluate candidate skills.</p>
                            <ul className="space-y-2 mt-4">
                                <li className="flex gap-2 items-center">
                                    <Check className="h-4 w-4 text-green-500" />
                                    <span>Pre-built assessment templates</span>
                                </li>
                                <li className="flex gap-2 items-center">
                                    <Check className="h-4 w-4 text-green-500" />
                                    <span>Custom question creation</span>
                                </li>
                                <li className="flex gap-2 items-center">
                                    <Check className="h-4 w-4 text-green-500" />
                                    <span>Automated scoring options</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Testimonials */}
            <section className="space-y-8">
                <h2 className="text-3xl font-bold text-center">What Our Users Say</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card className="border border-border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
                        <CardContent className="p-6 space-y-4">
                            <p className="italic">"Talent Talk has transformed our hiring process. We're able to interview more candidates with less administrative overhead and make better hiring decisions."</p>
                            <div className="flex items-center gap-4 pt-4">
                                <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                    <span className="font-semibold">JD</span>
                                </div>
                                <div>
                                    <h4 className="font-medium">Jane Doe</h4>
                                    <p className="text-sm text-muted-foreground">HR Director, TechCorp</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border border-border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
                        <CardContent className="p-6 space-y-4">
                            <p className="italic">"The integrated code editor is a game changer for technical interviews. We can evaluate skills in real-time and provide immediate feedback."</p>
                            <div className="flex items-center gap-4 pt-4">
                                <div className="h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                                    <span className="font-semibold">MS</span>
                                </div>
                                <div>
                                    <h4 className="font-medium">Michael Smith</h4>
                                    <p className="text-sm text-muted-foreground">CTO, DevStartup</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border border-border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
                        <CardContent className="p-6 space-y-4">
                            <p className="italic">"As a job seeker, Talent Talk made the interview process much less stressful. The platform is intuitive and the video quality is excellent."</p>
                            <div className="flex items-center gap-4 pt-4">
                                <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                                    <span className="font-semibold">AJ</span>
                                </div>
                                <div>
                                    <h4 className="font-medium">Amanda Johnson</h4>
                                    <p className="text-sm text-muted-foreground">Software Engineer</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-3xl p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
                    <div className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-bold">Ready to get started?</h2>
                        <p className="text-muted-foreground">Join thousands of professionals on Talent Talk today</p>
                    </div>
                    <Button size="lg" className="gap-2 whitespace-nowrap">
                        Sign Up Free <ArrowRight className="w-4 h-4" />
                    </Button>
                </div>
            </section>
        </div>
    );
}
