import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  GraduationCap,
  Briefcase,
  Code,
  Award,
  ExternalLink,
  ChevronDown,
  Brain,
  Database,
  LineChart,
  Cpu,
  Sparkles,
  Download,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ParticlesBackground from "@/components/ParticlesBackground";
import profileImage from "@/assets/profile.jpeg";

// Import logos
import pythonLogo from "@/assets/logos/python.svg";
import tensorflowLogo from "@/assets/logos/tensorflow.svg";
import reactLogo from "@/assets/logos/react.svg";
import pandasLogo from "@/assets/logos/pandas.svg";
import flaskLogo from "@/assets/logos/flask.svg";
import sqlLogo from "@/assets/logos/sql.svg";
import mlLogo from "@/assets/logos/ml.svg";
import deeplearningLogo from "@/assets/logos/deeplearning.svg";
import huaweiLogo from "@/assets/logos/huawei.png";
import courseraLogo from "@/assets/logos/coursera.png";
import depiLogo from "@/assets/logos/depi.png";
import informaticaLogo from "@/assets/logos/informatica.png";


const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const roles = [
    "AI & Data Science Enthusiast",
    "Machine Learning Engineer",
    "Data Analyst",
    "Problem Solver",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Typing effect
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let charIndex = 0;
    setTypedText("");

    const typeInterval = setInterval(() => {
      if (charIndex <= currentRole.length) {
        setTypedText(currentRole.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentRoleIndex]);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
  ];

  const experiences = [
    {
      title: "Data Science Track Participant",
      company: "Digital Egypt Pioneers Initiative (DEPI)",
      period: "2025 – Present",
      location: "Remote",
      logo: depiLogo,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-white",
      points: [
        "Worked on real-world projects applying data analysis and visualization using Python, Pandas, and Matplotlib",
        "Collaborated with a team to build AI-powered solutions and predictive models",
        "Completed structured learning covering Machine Learning, SQL, and cloud computing fundamentals",
      ],
    },
    {
      title: "Oracle ADF Intern",
      company: "Informatique",
      period: "Jul 2025 – Sep 2025",
      location: "Cairo, Egypt",
      logo: informaticaLogo,
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-white",
      points: [
        "Developed enterprise applications using Oracle ADF framework",
        "Designed and implemented data-driven components integrated with Oracle databases",
        "Collaborated with senior developers to understand enterprise application workflows",
      ],
    },
  ];

  const projects = [
    {
      title: "Walmart Sales Prediction",
      subtitle: "DEPI Graduation Project",
      year: "2025",
      tech: ["Python", "Machine Learning", "Flask", "React"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      link: "https://github.com/ahmed-essam11",
      points: [
        "Built an end-to-end ML system to predict weekly sales with 97% accuracy",
        "Performed extensive data cleaning and feature engineering",
        "Deployed using Flask REST API integrated with React web app",
      ],
      icon: LineChart,
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      title: "Breast Cancer Prediction",
      subtitle: "ML Deployment Project",
      year: "2025",
      tech: ["Python", "Machine Learning", "Flask", "React"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=250&fit=crop",
      link: "https://github.com/ahmed-essam11",
      points: [
        "Developed ML classification system with 99% accuracy",
        "Applied data preprocessing, feature scaling, and selection",
        "Deployed with Flask REST API and React frontend",
      ],
      icon: Brain,
      gradient: "from-pink-500 to-rose-600",
    },
    {
      title: "Calories Burn Prediction Dashboard",
      subtitle: "Data Visualization Project",
      year: "2025",
      tech: ["Python", "Pandas", "Plotly", "Dash"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
      link: "https://github.com/ahmed-essam11",
      points: [
        "Built interactive dashboard to visualize exercise data",
        "Achieved 99.8% prediction performance on test data",
      ],
      icon: Database,
      gradient: "from-orange-500 to-amber-600",
    },
    {
      title: "Gender Classification from Facial Images",
      subtitle: "Deep Learning Project",
      year: "2024",
      tech: ["Python", "TensorFlow", "CNN"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
      link: "https://github.com/ahmed-essam11",
      points: [
        "Built CNN model to classify gender from facial images",
        "Achieved 97% validation accuracy",
      ],
      icon: Cpu,
      gradient: "from-violet-500 to-purple-600",
    },
    {
      title: "AI Virtual Mouse",
      subtitle: "Computer Vision Project",
      year: "2024",
      tech: ["Python", "OpenCV", "MediaPipe"],
      image: "https://images.unsplash.com/photo-1527430253228-e93688616381?w=400&h=250&fit=crop",
      link: "https://github.com/ahmed-essam11",
      points: [
        "Developed real-time gesture-based virtual mouse controller",
        "Used webcam and hand tracking for interaction",
      ],
      icon: Sparkles,
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      title: "Movie Dataset Analysis",
      subtitle: "Data Analysis Project",
      year: "2024",
      tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=250&fit=crop",
      link: "https://github.com/ahmed-essam11",
      points: [
        "Performed EDA on 5,000+ movie entries",
        "Found average 2.6x budget-to-revenue return",
        "Identified top-performing genres",
      ],
      icon: LineChart,
      gradient: "from-indigo-500 to-blue-600",
    },
  ];

  const technicalSkills = [
    { name: "Python", level: 95, logo: pythonLogo },
    { name: "Machine Learning", level: 90, logo: mlLogo },
    { name: "Data Analysis", level: 92, logo: pandasLogo },
    { name: "TensorFlow", level: 85, logo: tensorflowLogo },
    { name: "SQL", level: 88, logo: sqlLogo },
    { name: "React", level: 80, logo: reactLogo },
    { name: "Flask", level: 85, logo: flaskLogo },
    { name: "Deep Learning", level: 82, logo: deeplearningLogo },
  ];

  const tools = ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Google Colab", "Pandas", "NumPy", "Matplotlib", "Seaborn"];

  const certifications = [
    { name: "Digital Egypt Pioneers Initiative (DEPI) – Data Science", issuer: "DEPI", date: "Dec 2025", logo: depiLogo, color: "from-blue-500 to-cyan-500" },
    { name: "HCIA – Artificial Intelligence", issuer: "Huawei", date: "Oct 2024", logo: huaweiLogo, color: "from-red-500 to-orange-500" },
    { name: "Intro to Machine Learning", issuer: "Huawei", date: "Jun 2024", logo: huaweiLogo, color: "from-red-500 to-orange-500" },
    { name: "Python for Everybody Specialization", issuer: "Coursera", date: "Jun 2024", logo: courseraLogo, color: "from-blue-600 to-blue-400" },
  ];

  const stats = [
    { value: "6+", label: "Projects", icon: "🚀" },
    { value: "99%", label: "ML Accuracy", icon: "🎯" },
    { value: "4+", label: "Certificates", icon: "🏆" },
  ];


  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-background/90 backdrop-blur-xl shadow-lg border-b border-border/50" 
            : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.span
            className="text-2xl font-bold text-gradient"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            AE
          </motion.span>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-all duration-300 relative group ${
                  activeSection === item.id ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </motion.button>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 gradient-navy" />
          <div 
            className="absolute inset-0 bg-background"
            style={{
              clipPath: "polygon(0 65%, 100% 45%, 100% 100%, 0 100%)"
            }}
          />
          
          {/* tsParticles */}
          <ParticlesBackground />
          
          {/* Floating Elements */}
          <motion.div
            animate={{
              x: mousePosition.x,
              y: mousePosition.y,
            }}
            transition={{ type: "spring", stiffness: 50 }}
            className="absolute inset-0 pointer-events-none"
          >
            <div className="absolute top-20 left-[10%] w-40 h-40 bg-white/5 rounded-full blur-3xl animate-float" />
            <div className="absolute top-40 right-[15%] w-60 h-60 bg-accent/10 rounded-full blur-3xl animate-float-delayed" />
            <div className="absolute bottom-[30%] left-[20%] w-32 h-32 bg-white/5 rounded-full blur-2xl animate-float-slow" />
            <div className="absolute top-[60%] right-[25%] w-48 h-48 bg-primary/10 rounded-full blur-3xl animate-float" />
          </motion.div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-10" 
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), 
                               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        <div className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-20">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-white/80 text-sm">Available for opportunities</span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-white/60 text-lg mb-3"
              >
                I'm
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl md:text-7xl font-bold mb-4 text-white"
              >
                Ahmed Essam
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="h-12 mb-6"
              >
                <span className="text-xl md:text-2xl text-accent typing-cursor">
                  {typedText}
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
              >
                <Badge className="bg-white/10 text-white border-white/20 px-4 py-2 backdrop-blur-sm">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  B.Sc. Computer Science (AI)
                </Badge>
                <Badge className="bg-accent/20 text-accent border-accent/30 px-4 py-2 backdrop-blur-sm">
                  GPA: 3.8 / 4.0
                </Badge>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex gap-4 justify-center lg:justify-start"
              >
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 gap-2 group shadow-xl hover:shadow-2xl transition-all duration-300"
                  onClick={() => scrollToSection("projects")}
                >
                  View My Work
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                  asChild
                >
                  <a href="/cv/AHMED_ESSAM_MOSTAFA.pdf" download>
                    <Download className="w-4 h-4 mr-2" />
                    Download CV
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Decorative Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-6 rounded-full border-2 border-dashed border-white/20"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-12 rounded-full border border-white/10"
                />
                
                {/* Main Image Container */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-2 animate-glow"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 100%)"
                  }}
                >
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/20">
                    <img 
                      src={profileImage} 
                      alt="Ahmed Essam"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                {/* Floating Stats - Repositioned */}
                <AnimatePresence>
                  {stats.map((stat, index) => {
                    const positions = [
                      { className: "-left-24 top-8", delay: 0.8 },
                      { className: "-right-24 top-16", delay: 0.9 },
                      { className: "-left-20 bottom-16", delay: 1.0 },
                    ];
                    return (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: positions[index].delay, type: "spring" }}
                        whileHover={{ scale: 1.1, y: -5 }}
                        className={`absolute ${positions[index].className} bg-background/95 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-border/50 cursor-pointer`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{stat.icon}</span>
                          <div>
                            <p className="text-2xl font-bold text-primary">{stat.value}</p>
                            <p className="text-xs text-muted-foreground">{stat.label}</p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection("about")}
          >
            <span className="text-sm text-muted-foreground">Scroll Down</span>
            <ChevronDown className="w-6 h-6 text-primary" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-primary font-medium mb-2 block"
              >
                ABOUT ME
              </motion.span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Get to Know Me</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Passionate about transforming data into actionable insights
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: Brain, title: "AI Enthusiast", desc: "Passionate about Machine Learning and Deep Learning", color: "primary" },
                { icon: Database, title: "Data Scientist", desc: "Skilled in data analysis and visualization", color: "accent" },
                { icon: Code, title: "Developer", desc: "Building full-stack ML applications", color: "primary" },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 glass-card text-center group hover-lift hover-glow cursor-pointer">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-${item.color}/10 flex items-center justify-center group-hover:bg-${item.color}/20 transition-colors`}
                    >
                      <item.icon className={`w-8 h-8 text-${item.color}`} />
                    </motion.div>
                    <h3 className="font-bold mb-2 text-lg">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 glass-card border-gradient">
                <p className="text-lg text-muted-foreground leading-relaxed text-center">
                  Motivated AI-major Computer Science student seeking an entry-level opportunity 
                  in Data Science to apply and expand skills in data analysis, machine learning, 
                  and real-world problem solving. Passionate about uncovering insights from data 
                  and contributing to impactful projects in a collaborative environment.
                </p>
                <div className="flex items-center justify-center gap-2 mt-6 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>El Nubaria, Beheira, Egypt</span>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 gradient-navy opacity-5"
            style={{
              clipPath: "polygon(0 10%, 100% 0, 100% 90%, 0 100%)"
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium mb-2 block">EXPERIENCE</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional Journey</h2>
            <p className="text-muted-foreground">My career path and accomplishments</p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20 hidden md:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-8 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-lg hidden md:block" />
                  
                  <Card className="md:ml-20 glass-card hover-lift hover-glow overflow-hidden">
                    <div className={`h-2 bg-gradient-to-r ${exp.color}`} />
                    <div className="p-6">
                      <div className="flex gap-4">
                        {/* Logo */}
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                          className={`flex-shrink-0 w-16 h-16 rounded-xl ${exp.bgColor} flex items-center justify-center shadow-lg overflow-hidden p-2`}
                        >
                          <img 
                            src={exp.logo} 
                            alt={exp.company}
                            className="w-full h-full object-contain"
                          />
                        </motion.div>
                        
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                            <div>
                              <h3 className="text-xl font-bold">{exp.title}</h3>
                              <p className="text-primary font-medium">{exp.company}</p>
                            </div>
                            <div className="text-right text-muted-foreground mt-2 md:mt-0">
                              <p className="font-medium">{exp.period}</p>
                              <p className="text-sm flex items-center gap-1 justify-end">
                                <MapPin className="w-3 h-3" />
                                {exp.location}
                              </p>
                            </div>
                          </div>
                          <ul className="space-y-3">
                            {exp.points.map((point, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * i }}
                                className="flex items-start gap-3 text-muted-foreground"
                              >
                                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                                {point}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium mb-2 block">PORTFOLIO</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground">Some of my recent work that showcases my skills</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full glass-card overflow-hidden group hover-lift cursor-pointer">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-70 group-hover:opacity-80 transition-opacity`} />
                    
                    {/* Overlay Content */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30"
                      >
                        <ExternalLink className="w-6 h-6 text-white" />
                      </motion.div>
                    </div>

                    <div className="absolute top-4 right-4">
                      <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <project.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="text-white/80 text-sm bg-black/20 px-2 py-1 rounded-full backdrop-blur-sm">{project.year}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-sm text-primary mb-4">{project.subtitle}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((t) => (
                        <Badge key={t} variant="secondary" className="text-xs">
                          {t}
                        </Badge>
                      ))}
                    </div>
                    <ul className="space-y-2">
                      {project.points.map((point, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-muted/30"
            style={{
              clipPath: "polygon(0 5%, 100% 0, 100% 95%, 0 100%)"
            }}
          />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium mb-2 block">SKILLS</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
            <p className="text-muted-foreground">Technologies and tools I work with</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technical Skills with Progress Bars */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 glass-card">
                <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Code className="w-5 h-5 text-primary" />
                  </div>
                  Technical Skills
                </h3>
                <div className="space-y-6">
                  {technicalSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group"
                    >
                      <div className="flex justify-between mb-2">
                        <span className="font-medium flex items-center gap-3">
                          <img src={skill.logo} alt={skill.name} className="w-6 h-6 object-contain" />
                          {skill.name}
                        </span>
                        <span className="text-primary font-bold">{skill.level}%</span>
                      </div>
                      <div className="h-3 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full relative"
                        >
                          <div className="absolute inset-0 animate-shimmer" />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Tools & Soft Skills */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 glass-card">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-accent" />
                    </div>
                    Tools & Technologies
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {tools.map((tool, index) => (
                      <motion.div
                        key={tool}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        <Badge variant="outline" className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all cursor-default">
                          {tool}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Card className="p-8 glass-card">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-primary" />
                    </div>
                    Soft Skills
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {["Problem Solving", "Teamwork", "Communication", "Time Management"].map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * index }}
                        whileHover={{ scale: 1.02, x: 5 }}
                        className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors cursor-default"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-sm font-medium">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Card className="p-8 glass-card">
              <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                Certifications
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center gap-4 p-5 rounded-xl bg-muted/50 hover:bg-muted transition-all cursor-default group"
                  >
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform overflow-hidden p-2`}>
                      <img 
                        src={cert.logo} 
                        alt={cert.issuer}
                        className="w-full h-full object-contain"
                        style={{ filter: cert.issuer === "DEPI" ? "none" : "brightness(0) invert(1)" }}
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm leading-tight">{cert.name}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {cert.issuer} • {cert.date}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 relative overflow-hidden bg-muted/30">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-primary font-medium mb-2 block uppercase tracking-wider"
            >
              What I Offer
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">My Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive AI and Data Science solutions to help businesses make data-driven decisions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Data Analyst",
                description: "Transform raw data into actionable insights through comprehensive analysis, visualization, and reporting",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
                icon: LineChart,
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                title: "Machine Learning",
                description: "Build and deploy predictive models that learn from data to automate decisions and improve accuracy",
                image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop",
                icon: Brain,
                gradient: "from-purple-500 to-pink-500"
              },
              {
                title: "Data Science & AI",
                description: "End-to-end AI solutions from data collection to model deployment for complex business problems",
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
                icon: Cpu,
                gradient: "from-emerald-500 to-teal-500"
              },
              {
                title: "Data Cleaning & Feature Engineering",
                description: "Prepare and transform messy data into high-quality features for optimal model performance",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
                icon: Database,
                gradient: "from-orange-500 to-amber-500"
              },
              {
                title: "ML & Deep Learning Models",
                description: "Design and train neural networks and deep learning architectures for advanced AI applications",
                image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=300&fit=crop",
                icon: Sparkles,
                gradient: "from-indigo-500 to-violet-500"
              },
              {
                title: "AI Solution & Automation",
                description: "Automate repetitive tasks and create intelligent systems that streamline business workflows",
                image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
                icon: Code,
                gradient: "from-rose-500 to-red-500"
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="overflow-hidden h-full bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-60 group-hover:opacity-70 transition-opacity`} />
                    <div className="absolute top-4 right-4">
                      <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 gradient-navy" />
          <div 
            className="absolute inset-0 bg-background"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 25%, 0 40%)"
            }}
          />
          
          {/* Floating Elements */}
          <div className="absolute top-1/4 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-float-delayed" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-accent font-medium mb-2 block"
            >
              CONTACT
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Let's Connect</h2>
            <p className="text-white/70 mb-12 max-w-xl mx-auto text-lg">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about AI and Data Science!
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:ahesmoal@gmail.com"
                className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all border border-white/20"
              >
                <Mail className="w-5 h-5 text-accent" />
                ahesmoal@gmail.com
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+201015495031"
                className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all border border-white/20"
              >
                <Phone className="w-5 h-5 text-accent" />
                +20 1015495031
              </motion.a>
            </div>

            <div className="flex items-center justify-center gap-6">
              <motion.a
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                href="https://linkedin.com/in/ahmed-essam11"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all border border-white/20 text-white"
              >
                <Linkedin className="w-7 h-7" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/ahmed-essam11"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all border border-white/20 text-white"
              >
                <Github className="w-7 h-7" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Ahmed Essam
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
