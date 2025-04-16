"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Briefcase, Check, Code, FileCheck, GraduationCap, MessagesSquare, Users, Video, Sparkles, ArrowDown } from 'lucide-react';
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
        <>
            <div className="container mx-auto px-4 pt-2 pb-6 space-y-8">
            {/* Hero Section */}
                <section className="relative flex flex-col items-center justify-center text-center space-y-8 pt-0 pb-8 overflow-hidden">
                    {/* Background decoration elements */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-40 dark:opacity-20">
                        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-400/20 dark:bg-blue-600/20 blur-3xl animate-blob"></div>
                        <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-purple-400/20 dark:bg-purple-600/20 blur-3xl animate-blob animation-delay-2000"></div>
                        <div className="absolute bottom-1/4 right-1/3 w-60 h-60 rounded-full bg-indigo-400/20 dark:bg-indigo-600/20 blur-3xl animate-blob animation-delay-4000"></div>
                    </div>
                    
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <div className="inline-flex items-center px-3 py-1 rounded-full border border-border bg-background/80 backdrop-blur-sm text-sm mb-4 shadow-sm">
                            <Sparkles className="h-3.5 w-3.5 mr-2 text-blue-500" />
                            <span>Revolutionizing the interview experience</span>
                        </div>
                    </div>
                    
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-700 delay-100">
                        Welcome to <span className={`bg-clip-text text-transparent bg-gradient-to-r ${themeColors.highlightFrom} ${themeColors.highlightTo} relative`}>
                            Talent Talk
                            <svg className="absolute -bottom-1 left-0 w-full h-2 text-blue-500/40 dark:text-blue-400/40" viewBox="0 0 100 20" fill="currentColor" preserveAspectRatio="none">
                                <path d="M0,10 Q25,5 50,10 T100,10 V20 H0 Z" />
                            </svg>
                        </span>
                </h1>
                
                    <p className="text-xl md:text-2xl max-w-2xl text-muted-foreground animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
                    Your platform for talent discovery, growth, and seamless interview experiences.
                </p>
                
                    <div className="flex flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom-7 duration-700 delay-300">
                        <Button size="lg" className="gap-2 relative group overflow-hidden">
                            <span className="relative z-10">Get Started</span>
                            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    </Button>
                        <Button variant="outline" size="lg" className="group">
                        Learn More
                            <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
                    </Button>
                </div>
                    
                    {/* Hero image */}
                    <div className="w-full max-w-4xl mx-auto mt-12 relative animate-in fade-in zoom-in duration-1000 delay-500">
                        <div className="aspect-video relative rounded-xl overflow-hidden shadow-2xl border border-border/50">
                            <Image 
                                src="/demo-hero-image.jpg" 
                                alt="Talent Talk Platform Interface" 
                                width={1200} 
                                height={675}
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                        </div>
                        
                        {/* Floating cards */}
                        <div className="absolute -bottom-5 -left-5 sm:left-8 w-48 animate-float">
                            <div className="rounded-lg bg-card border border-border shadow-lg p-3">
                                <div className="flex items-center gap-2">
                                    <div className="h-8 w-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                                        <Users className="h-4 w-4" />
                                    </div>
                                    <div className="text-sm font-medium">Active Interviews</div>
                                </div>
                                <div className="mt-2 text-2xl font-bold">245+</div>
                            </div>
                        </div>
                        
                        <div className="absolute -top-4 -right-5 sm:right-8 w-52 animate-float animation-delay-1000">
                            <div className="rounded-lg bg-card border border-border shadow-lg p-3">
                                <div className="text-sm font-medium">Feedback Score</div>
                                <div className="mt-1 flex gap-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats bar - moved outside of hero section */}
                <section className="relative py-8 z-10 -translate-y-17">
                    <div className="w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 animate-in fade-in-0 duration-700 delay-700 px-4">
                        <div className="rounded-lg bg-white/90 dark:bg-black/90 border border-gray-200 dark:border-gray-800 p-6 text-center shadow-lg">
                            <h4 className="text-5xl font-bold text-blue-500">1000+</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Candidates Interviewed</p>
                        </div>
                        <div className="rounded-lg bg-white/90 dark:bg-black/90 border border-gray-200 dark:border-gray-800 p-6 text-center shadow-lg">
                            <h4 className="text-5xl font-bold text-violet-500">250+</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Companies</p>
                        </div>
                        <div className="rounded-lg bg-white/90 dark:bg-black/90 border border-gray-200 dark:border-gray-800 p-6 text-center shadow-lg">
                            <h4 className="text-5xl font-bold text-indigo-500">98%</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Satisfaction Rate</p>
                        </div>
                        <div className="rounded-lg bg-white/90 dark:bg-black/90 border border-gray-200 dark:border-gray-800 p-6 text-center shadow-lg">
                            <h4 className="text-5xl font-bold text-green-500">45%</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Hiring Improvement</p>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="scroll-m-20 pt-2 pb-8" id="features">
                    <div className="text-center space-y-2 max-w-3xl mx-auto mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 text-center relative inline-block mb-2">
                            Key Features
                            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/0 via-blue-500/80 to-purple-500/0"></div>
                        </h2>
                        <p className="text-lg text-muted-foreground animate-in fade-in slide-in-from-bottom-5 duration-700 delay-200">
                            Powerful tools designed to streamline your talent acquisition process
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
                        <div className="group rounded-xl p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/20 border border-blue-200 dark:border-blue-800 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
                            <div className="h-14 w-14 rounded-2xl bg-blue-200 dark:bg-blue-800/50 flex items-center justify-center text-blue-700 dark:text-blue-300 mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                                <Users className="h-7 w-7" />
                            </div>
                            <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-3">Connect</h3>
                            <p className="text-blue-700 dark:text-blue-300 mb-6">Connect with top talent and recruiters in your industry through our intelligent matching system.</p>
                            <div className="pt-2 border-t border-blue-200 dark:border-blue-800/50">
                                <Link href="#" className="inline-flex items-center text-sm font-medium text-blue-700 dark:text-blue-300 hover:text-blue-900 dark:hover:text-blue-100">
                                    Learn more 
                                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>

                        <div className="group rounded-xl p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/20 border border-purple-200 dark:border-purple-800 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-400">
                            <div className="h-14 w-14 rounded-2xl bg-purple-200 dark:bg-purple-800/50 flex items-center justify-center text-purple-700 dark:text-purple-300 mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                                <GraduationCap className="h-7 w-7" />
                            </div>
                            <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-3">Learn</h3>
                            <p className="text-purple-700 dark:text-purple-300 mb-6">Access curated resources and AI-powered insights to improve your skills and interview performance.</p>
                            <div className="pt-2 border-t border-purple-200 dark:border-purple-800/50">
                                <Link href="#" className="inline-flex items-center text-sm font-medium text-purple-700 dark:text-purple-300 hover:text-purple-900 dark:hover:text-purple-100">
                                    Learn more 
                                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>

                        <div className="group rounded-xl p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/20 border border-green-200 dark:border-green-800 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-500">
                            <div className="h-14 w-14 rounded-2xl bg-green-200 dark:bg-green-800/50 flex items-center justify-center text-green-700 dark:text-green-300 mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                                <Briefcase className="h-7 w-7" />
                            </div>
                            <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-3">Grow</h3>
                            <p className="text-green-700 dark:text-green-300 mb-6">Accelerate your career growth with personalized feedback and development opportunities.</p>
                            <div className="pt-2 border-t border-green-200 dark:border-green-800/50">
                                <Link href="#" className="inline-flex items-center text-sm font-medium text-green-700 dark:text-green-300 hover:text-green-900 dark:hover:text-green-100">
                                    Learn more 
                                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
                <section className="space-y-8 scroll-m-20 relative py-8" id="how-it-works">
                    <div className="absolute inset-0 -z-10 overflow-hidden">
                        <div className="absolute -top-12 -left-12 w-64 h-64 bg-blue-400/10 dark:bg-blue-800/10 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-purple-400/10 dark:bg-purple-800/10 rounded-full blur-3xl"></div>
                    </div>
                    
                    <div className="text-center space-y-4 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold animate-in fade-in slide-in-from-bottom-4 duration-700 text-center relative inline-block">
                            How It Works
                            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500/0 via-indigo-500/80 to-violet-500/0"></div>
                        </h2>
                        <p className="text-lg text-muted-foreground animate-in fade-in slide-in-from-bottom-5 duration-700 delay-100">
                            Our streamlined interview process saves time and improves hiring outcomes
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-5 space-y-6 order-2 lg:order-1 animate-in fade-in-0 duration-700 delay-100">
                            <div className="space-y-6">
                                <div className="relative">
                                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 text-white text-xl font-bold mb-4 shadow-lg shadow-blue-500/30 dark:shadow-blue-500/10">
                                        1
                                    </div>
                                    <h3 className="text-2xl font-semibold mb-3">Schedule Interviews</h3>
                                    <p className="text-lg text-muted-foreground">
                                        Use our intuitive calendar interface to find the perfect time for interviews with automatic timezone detection.
                                    </p>
                                </div>
                                
                                <div className="relative pl-8 border-l-2 border-dashed border-primary/30">
                                    <div className="w-12 h-12 -ml-14 rounded-full flex items-center justify-center bg-gradient-to-br from-indigo-500 to-violet-600 text-white text-xl font-bold mb-4 shadow-lg shadow-indigo-500/30 dark:shadow-indigo-500/10">
                                        2
                                    </div>
                                    <h3 className="text-2xl font-semibold mb-3">Join Video Calls</h3>
                                    <p className="text-lg text-muted-foreground">
                                        Conduct high-definition video interviews directly from your browser with no downloads required.
                                    </p>
                                </div>
                                
                                <div className="relative pl-8 border-l-2 border-dashed border-primary/30">
                                    <div className="w-12 h-12 -ml-14 rounded-full flex items-center justify-center bg-gradient-to-br from-violet-500 to-purple-600 text-white text-xl font-bold mb-4 shadow-lg shadow-violet-500/30 dark:shadow-violet-500/10">
                                        3
                                    </div>
                                    <h3 className="text-2xl font-semibold mb-3">Collaborative Coding</h3>
                                    <p className="text-lg text-muted-foreground">
                                        Evaluate technical skills in real-time with our integrated code editor and execution environment.
                                    </p>
                                </div>
                                
                                <div className="relative pl-8">
                                    <div className="w-12 h-12 -ml-14 rounded-full flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-600 text-white text-xl font-bold mb-4 shadow-lg shadow-purple-500/30 dark:shadow-purple-500/10">
                                        4
                                    </div>
                                    <h3 className="text-2xl font-semibold mb-3">Feedback & Analytics</h3>
                                    <p className="text-lg text-muted-foreground">
                                        Get structured feedback, compare candidates, and make data-driven hiring decisions.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="pt-6">
                                <Button variant="outline" className="group gap-2">
                                    Learn More About Our Process
                                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </div>
                    </div>
                        
                        <div className="lg:col-span-7 relative animate-in fade-in slide-in-from-right-8 duration-1000 order-1 lg:order-2">
                            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
                                <Image 
                                    src="/demo-interview-platform.jpg" 
                                    alt="Talent Talk Interview Platform" 
                                    width={800} 
                                    height={600}
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-indigo-900/60 to-transparent flex items-center justify-center">
                                    <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer group hover:bg-white/30 transition-all">
                                        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                                            <svg className="w-6 h-6 text-indigo-600 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="absolute -bottom-6 -right-6 sm:right-8 w-72 animate-float animation-delay-2000">
                                <div className="rounded-lg bg-card border border-border shadow-lg p-4">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="h-10 w-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                                            <Video className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium">Interview with Alex Chen</h4>
                                            <p className="text-sm text-muted-foreground">Frontend Developer • Today at 2:00 PM</p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                    <Button size="sm" className="w-full">Join Now</Button>
                                    <Button variant="outline" size="sm" className="w-full">Reschedule</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tools Section */}
                <section className="space-y-8 scroll-m-20 py-8" id="tools">
                    <div className="text-center space-y-4 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold animate-in fade-in slide-in-from-bottom-4 duration-700 text-center relative inline-block">
                            Powerful Interview Tools
                            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/0 via-blue-500/80 to-purple-500/0"></div>
                        </h2>
                        <p className="text-lg text-muted-foreground animate-in fade-in slide-in-from-bottom-5 duration-700 delay-100">
                            State-of-the-art tools designed to make your interview process efficient and effective
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mt-8">
                        <div className="group rounded-xl overflow-hidden border border-border bg-card hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
                            <div className="h-52 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-blue-700/40 dark:from-blue-700/30 dark:to-blue-900/50"></div>
                                <Image 
                                    src="/demo-video-conference.jpg" 
                                    alt="HD Video Conferencing" 
                                    width={600} 
                                    height={400}
                                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4">
                                    <div className="h-12 w-12 rounded-2xl bg-blue-200/80 dark:bg-blue-800/80 backdrop-blur-sm flex items-center justify-center text-blue-700 dark:text-blue-300">
                            <Video className="h-6 w-6" />
                        </div>
                                </div>
                            </div>
                            
                            <div className="p-6 space-y-4">
                        <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100">HD Video Conferencing</h3>
                                <p className="text-muted-foreground">Crystal clear video and audio for seamless communication with candidates and teams.</p>
                                <ul className="space-y-3 mt-4">
                                    <li className="flex gap-2 items-start">
                                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mt-0.5">
                                            <Check className="h-3 w-3" />
                                        </div>
                                        <span>Multi-participant support with virtual backgrounds</span>
                            </li>
                                    <li className="flex gap-2 items-start">
                                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mt-0.5">
                                            <Check className="h-3 w-3" />
                                        </div>
                                        <span>Advanced screen sharing with annotation tools</span>
                            </li>
                                    <li className="flex gap-2 items-start">
                                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mt-0.5">
                                            <Check className="h-3 w-3" />
                                        </div>
                                        <span>Automatic recording with intelligent summaries</span>
                            </li>
                        </ul>
                                
                                <div className="pt-4">
                                    <Link href="#" className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 group/link">
                                        <span>Explore video features</span>
                                        <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                    </div>
                        </div>

                        <div className="group rounded-xl overflow-hidden border border-border bg-card hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
                            <div className="h-52 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/20 to-indigo-700/40 dark:from-indigo-700/30 dark:to-indigo-900/50"></div>
                                <Image 
                                    src="/demo-code-editor.jpg" 
                                    alt="Interactive Code Editor" 
                                    width={600} 
                                    height={400}
                                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4">
                                    <div className="h-12 w-12 rounded-2xl bg-indigo-200/80 dark:bg-indigo-800/80 backdrop-blur-sm flex items-center justify-center text-indigo-700 dark:text-indigo-300">
                                        <Code className="h-6 w-6" />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="p-6 space-y-4">
                        <h3 className="text-xl font-semibold text-indigo-900 dark:text-indigo-100">Interactive Code Editor</h3>
                                <p className="text-muted-foreground">Evaluate technical skills in real-time with our collaborative code editor.</p>
                                <ul className="space-y-3 mt-4">
                                    <li className="flex gap-2 items-start">
                                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mt-0.5">
                                            <Check className="h-3 w-3" />
                                        </div>
                                        <span>Real-time collaboration with syntax highlighting</span>
                            </li>
                                    <li className="flex gap-2 items-start">
                                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mt-0.5">
                                            <Check className="h-3 w-3" />
                                        </div>
                                        <span>Support for 40+ programming languages</span>
                            </li>
                                    <li className="flex gap-2 items-start">
                                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mt-0.5">
                                            <Check className="h-3 w-3" />
                                        </div>
                                        <span>Built-in code execution and test case verification</span>
                            </li>
                        </ul>
                                
                                <div className="pt-4">
                                    <Link href="#" className="inline-flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 group/link">
                                        <span>Try the code editor</span>
                                        <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                    </div>
                        </div>

                        <div className="group rounded-xl overflow-hidden border border-border bg-card hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-400">
                            <div className="h-52 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-teal-700/40 dark:from-teal-700/30 dark:to-teal-900/50"></div>
                                <Image 
                                    src="/demo-feedback.jpg" 
                                    alt="Feedback System" 
                                    width={600} 
                                    height={400}
                                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4">
                                    <div className="h-12 w-12 rounded-2xl bg-teal-200/80 dark:bg-teal-800/80 backdrop-blur-sm flex items-center justify-center text-teal-700 dark:text-teal-300">
                                        <MessagesSquare className="h-6 w-6" />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="p-6 space-y-4">
                        <h3 className="text-xl font-semibold text-teal-900 dark:text-teal-100">Feedback System</h3>
                                <p className="text-muted-foreground">Structured feedback collection for better evaluation and comparison.</p>
                                <ul className="space-y-3 mt-4">
                                    <li className="flex gap-2 items-start">
                                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-600 dark:text-teal-400 mt-0.5">
                                            <Check className="h-3 w-3" />
                                        </div>
                                        <span>Customizable evaluation criteria and rubrics</span>
                            </li>
                                    <li className="flex gap-2 items-start">
                                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-600 dark:text-teal-400 mt-0.5">
                                            <Check className="h-3 w-3" />
                                        </div>
                                        <span>Collaborative feedback from multiple interviewers</span>
                            </li>
                                    <li className="flex gap-2 items-start">
                                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-600 dark:text-teal-400 mt-0.5">
                                            <Check className="h-3 w-3" />
                                        </div>
                                        <span>AI-powered sentiment analysis and insights</span>
                            </li>
                        </ul>
                                
                                <div className="pt-4">
                                    <Link href="#" className="inline-flex items-center text-sm font-medium text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300 group/link">
                                        <span>See feedback features</span>
                                        <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                    </div>
                        </div>

                        <div className="group rounded-xl overflow-hidden border border-border bg-card hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-500">
                            <div className="h-52 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-amber-700/40 dark:from-amber-700/30 dark:to-amber-900/50"></div>
                                <Image 
                                    src="/demo-assessment.jpg" 
                                    alt="Assessment Tools" 
                                    width={600} 
                                    height={400}
                                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4">
                                    <div className="h-12 w-12 rounded-2xl bg-amber-200/80 dark:bg-amber-800/80 backdrop-blur-sm flex items-center justify-center text-amber-700 dark:text-amber-300">
                                        <FileCheck className="h-6 w-6" />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="p-6 space-y-4">
                        <h3 className="text-xl font-semibold text-amber-900 dark:text-amber-100">Assessment Tools</h3>
                                <p className="text-muted-foreground">Comprehensive assessment tools to evaluate candidate skills.</p>
                                <ul className="space-y-3 mt-4">
                                    <li className="flex gap-2 items-start">
                                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400 mt-0.5">
                                            <Check className="h-3 w-3" />
                                        </div>
                                        <span>Pre-built industry-specific assessment templates</span>
                            </li>
                                    <li className="flex gap-2 items-start">
                                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400 mt-0.5">
                                            <Check className="h-3 w-3" />
                                        </div>
                                        <span>Custom question creation and skill mapping</span>
                            </li>
                                    <li className="flex gap-2 items-start">
                                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400 mt-0.5">
                                            <Check className="h-3 w-3" />
                                        </div>
                                        <span>Automated scoring and trend analysis</span>
                            </li>
                        </ul>
                                
                                <div className="pt-4">
                                    <Link href="#" className="inline-flex items-center text-sm font-medium text-amber-600 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-300 group/link">
                                        <span>Explore assessments</span>
                                        <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                </div>
            </section>

            {/* Testimonials */}
                <section className="space-y-8 scroll-m-20 py-10 relative" id="testimonials">
                    <div className="absolute inset-0 -z-10 overflow-hidden">
                        <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-400/10 dark:bg-blue-800/10 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-purple-400/10 dark:bg-purple-800/10 rounded-full blur-3xl"></div>
                    </div>
                    
                    <div className="text-center space-y-4 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold animate-in fade-in slide-in-from-bottom-4 duration-700 text-center relative inline-block">
                            What Our Users Say
                            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-violet-500/0 via-violet-500/80 to-purple-500/0"></div>
                        </h2>
                        <p className="text-lg text-muted-foreground animate-in fade-in slide-in-from-bottom-5 duration-700 delay-100">
                            Hear from the companies and candidates who have transformed their interview process
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        <div className="group rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 p-1 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
                            <div className="relative p-6 rounded-lg h-full bg-gradient-to-br from-blue-50/50 to-transparent dark:from-blue-950/50 dark:to-transparent">
                                <div className="absolute top-6 right-6 text-blue-400 dark:text-blue-300 opacity-30">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.8333 16.6667C10.8333 13.0833 13.75 10.1667 17.3333 10.1667H19.1667V5.83334H17.3333C11.3333 5.83334 6.5 10.6667 6.5 16.6667V30.1667H20V16.6667H10.8333Z" fill="currentColor"/>
                                        <path d="M30.8333 16.6667C30.8333 13.0833 33.75 10.1667 37.3333 10.1667H39.1667V5.83334H37.3333C31.3333 5.83334 26.5 10.6667 26.5 16.6667V30.1667H40V16.6667H30.8333Z" fill="currentColor"/>
                                    </svg>
                                </div>
                                
                                <div className="space-y-4 relative z-10">
                                    <div className="flex gap-1">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    
                                    <p className="text-lg italic">"Talent Talk has transformed our hiring process. We're able to interview more candidates with less administrative overhead and make better hiring decisions."</p>
                                    
                                    <div className="pt-6 flex items-center gap-4">
                                        <div className="h-12 w-12 rounded-full overflow-hidden bg-gradient-to-br from-blue-200 to-blue-300 dark:from-blue-800 dark:to-blue-700 flex items-center justify-center shadow-sm">
                                            <Image 
                                                src="/demo-avatar-1.jpg" 
                                                alt="Jane Doe" 
                                                width={48} 
                                                height={48}
                                                className="object-cover w-full h-full"
                                            />
                                </div>
                                <div>
                                    <h4 className="font-medium">Jane Doe</h4>
                                    <p className="text-sm text-muted-foreground">HR Director, TechCorp</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="group rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 p-1 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
                            <div className="relative p-6 rounded-lg h-full bg-gradient-to-br from-purple-50/50 to-transparent dark:from-purple-950/50 dark:to-transparent">
                                <div className="absolute top-6 right-6 text-purple-400 dark:text-purple-300 opacity-30">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.8333 16.6667C10.8333 13.0833 13.75 10.1667 17.3333 10.1667H19.1667V5.83334H17.3333C11.3333 5.83334 6.5 10.6667 6.5 16.6667V30.1667H20V16.6667H10.8333Z" fill="currentColor"/>
                                        <path d="M30.8333 16.6667C30.8333 13.0833 33.75 10.1667 37.3333 10.1667H39.1667V5.83334H37.3333C31.3333 5.83334 26.5 10.6667 26.5 16.6667V30.1667H40V16.6667H30.8333Z" fill="currentColor"/>
                                    </svg>
                                </div>
                                
                                <div className="space-y-4 relative z-10">
                                    <div className="flex gap-1">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    
                                    <p className="text-lg italic">"As a developer, I love the code editor features. It's made technical interviews much more comfortable and allowed me to showcase my skills effectively."</p>
                                    
                                    <div className="pt-6 flex items-center gap-4">
                                        <div className="h-12 w-12 rounded-full overflow-hidden bg-gradient-to-br from-purple-200 to-purple-300 dark:from-purple-800 dark:to-purple-700 flex items-center justify-center shadow-sm">
                                            <Image 
                                                src="/demo-avatar-2.jpg" 
                                                alt="Mark Johnson" 
                                                width={48} 
                                                height={48}
                                                className="object-cover w-full h-full"
                                            />
                                </div>
                                <div>
                                            <h4 className="font-medium">Mark Johnson</h4>
                                            <p className="text-sm text-muted-foreground">Senior Developer, InnovateTech</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="group rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 p-1 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-400">
                            <div className="relative p-6 rounded-lg h-full bg-gradient-to-br from-indigo-50/50 to-transparent dark:from-indigo-950/50 dark:to-transparent">
                                <div className="absolute top-6 right-6 text-indigo-400 dark:text-indigo-300 opacity-30">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.8333 16.6667C10.8333 13.0833 13.75 10.1667 17.3333 10.1667H19.1667V5.83334H17.3333C11.3333 5.83334 6.5 10.6667 6.5 16.6667V30.1667H20V16.6667H10.8333Z" fill="currentColor"/>
                                        <path d="M30.8333 16.6667C30.8333 13.0833 33.75 10.1667 37.3333 10.1667H39.1667V5.83334H37.3333C31.3333 5.83334 26.5 10.6667 26.5 16.6667V30.1667H40V16.6667H30.8333Z" fill="currentColor"/>
                                    </svg>
                                </div>
                                
                                <div className="space-y-4 relative z-10">
                                    <div className="flex gap-1">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    
                                    <p className="text-lg italic">"Our hiring efficiency has increased by 40% since adopting Talent Talk. The feedback system alone has been worth the investment."</p>
                                    
                                    <div className="pt-6 flex items-center gap-4">
                                        <div className="h-12 w-12 rounded-full overflow-hidden bg-gradient-to-br from-indigo-200 to-indigo-300 dark:from-indigo-800 dark:to-indigo-700 flex items-center justify-center shadow-sm">
                                            <Image 
                                                src="/demo-avatar-3.jpg" 
                                                alt="Sarah Chen" 
                                                width={48} 
                                                height={48}
                                                className="object-cover w-full h-full"
                                            />
                                </div>
                                <div>
                                            <h4 className="font-medium">Sarah Chen</h4>
                                            <p className="text-sm text-muted-foreground">CTO, FutureSoft</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex justify-center mt-8 animate-in fade-in-0 duration-700 delay-500">
                        <Button variant="outline" className="group gap-2">
                            View More Testimonials
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                </div>
            </section>

            {/* CTA Section */}
                <section className="py-10 relative overflow-hidden">
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/90 to-purple-100/90 dark:from-blue-950/90 dark:to-purple-950/90"></div>
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/70 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/70 to-transparent"></div>
                        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"></div>
                    </div>
                    
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center space-y-8">
                            <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800 bg-blue-100/80 dark:bg-blue-900/80 backdrop-blur-sm text-sm shadow-sm">
                                <span className="text-black dark:text-white">Ready to transform your interview process?</span>
                            </div>
                            
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                                Start using <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400">Talent Talk</span> today
                            </h2>
                            
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                                Join thousands of companies and candidates who have already transformed their interview experience with our platform.
                            </p>
                            
                            <div className="flex flex-wrap gap-4 justify-center pt-4">
                                <Button size="lg" className="gap-2 relative group overflow-hidden">
                                    <span className="relative z-10">Get Started For Free</span>
                                    <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                </Button>
                                <Button variant="outline" size="lg">
                                    Schedule Demo
                    </Button>
                            </div>
                            
                            <div className="pt-10 flex flex-col items-center space-y-4">
                                <p className="text-sm text-muted-foreground">Trusted by innovative companies worldwide</p>
                                
                                <div className="flex flex-wrap justify-center gap-8 items-center opacity-80">
                                    {/* Replace with actual company logos or use placeholder ones */}
                                    <div className="h-8 w-24 bg-card/50 rounded flex items-center justify-center">
                                        <span className="font-bold text-muted-foreground/70">Company A</span>
                                    </div>
                                    <div className="h-8 w-24 bg-card/50 rounded flex items-center justify-center">
                                        <span className="font-bold text-muted-foreground/70">Company B</span>
                                    </div>
                                    <div className="h-8 w-24 bg-card/50 rounded flex items-center justify-center">
                                        <span className="font-bold text-muted-foreground/70">Company C</span>
                                    </div>
                                    <div className="h-8 w-24 bg-card/50 rounded flex items-center justify-center">
                                        <span className="font-bold text-muted-foreground/70">Company D</span>
                                    </div>
                                    <div className="h-8 w-24 bg-card/50 rounded flex items-center justify-center">
                                        <span className="font-bold text-muted-foreground/70">Company E</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </section>

                {/* Footer */}
                <footer className="py-12 border-t">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
                            <div className="space-y-6 md:col-span-3 lg:col-span-2">
                                <div className="flex items-center space-x-2">
                                    <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white">
                                        <span className="font-bold">TT</span>
                                    </div>
                                    <span className="text-lg font-bold">Talent Talk</span>
                                </div>
                                <p className="text-muted-foreground max-w-xs">
                                    Your platform for talent discovery, growth, and seamless interview experiences.
                                </p>
                                <div className="flex space-x-4">
                                    <Link href="#" className="h-10 w-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-muted transition-colors">
                                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                        </svg>
                                    </Link>
                                    <Link href="#" className="h-10 w-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-muted transition-colors">
                                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                        </svg>
                                    </Link>
                                    <Link href="#" className="h-10 w-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-muted transition-colors">
                                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">

                                            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                        </svg>
                                    </Link>
                                    <Link href="#" className="h-10 w-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-muted transition-colors">
                                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                            
                            <div>
                                <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Product</h3>
                                <ul className="space-y-3">
                                    <li><Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</Link></li>
                                    <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</Link></li>
                                    <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Integrations</Link></li>
                                    <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Case Studies</Link></li>
                                    <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">API</Link></li>
                                </ul>
                            </div>
                            
                            <div>
                                <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Resources</h3>
                                <ul className="space-y-3">
                                    <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Documentation</Link></li>
                                    <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Blog</Link></li>
                                    <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Community</Link></li>
                                    <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Support</Link></li>
                                    <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Tutorials</Link></li>
                                </ul>
                            </div>
                            
                            <div>
                                <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h3>
                                <ul className="space-y-3">
                                    <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
                                    <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Careers</Link></li>
                                    <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Investor Relations</Link></li>
                                    <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Press</Link></li>
                                    <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="border-t mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
                            <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Talent Talk. All rights reserved.</p>
                            <div className="flex space-x-6 mt-4 md:mt-0">
                                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
                                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link>
                                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Cookies</Link>
                            </div>
                        </div>
                    </div>
                </footer>
        </div>
        </>
    );
}
