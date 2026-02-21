import { Github, Mail } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50">
      
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b border-stone-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-stone-800">DDD1337</h1>
          <nav className="flex gap-6">
            <a href="#projects" className="text-stone-600 hover:text-amber-700 transition">Projects</a>
            <a href="#skills" className="text-stone-600 hover:text-amber-700 transition">Skills</a>
            <a href="#contact" className="text-stone-600 hover:text-amber-700 transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Open to Work
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-stone-800 mb-4">
            Full-Stack Developer
          </h1>
          <p className="text-xl text-stone-600 mb-8">
            Based in United States • Building scalable web applications and AI automation
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#projects" className="bg-amber-700 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition">
              View Projects
            </a>
            <a href="https://github.com/d234mkikodo" target="_blank" rel="noopener noreferrer" className="bg-stone-800 text-white px-6 py-3 rounded-lg hover:bg-stone-700 transition flex items-center gap-2">
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-stone-800 mb-12 text-center">Featured Project</h2>
          
          <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200">
            <div className="flex items-start justify-between mb-6">
              <div>
                <span className="text-amber-700 font-medium text-sm">Infrastructure & AI</span>
                <h3 className="text-2xl font-bold text-stone-800 mt-1">Dream Automation Lab</h3>
              </div>
              <a href="https://github.com/d234mkikodo/dream-automation-lab" target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-amber-700 transition">
                <Github className="w-6 h-6" />
              </a>
            </div>
            
            <p className="text-stone-600 mb-8">
              Self-hosted AI automation platform on Oracle Cloud with enterprise-grade security. 
              Features n8n workflow orchestration, MCP integration, and comprehensive security hardening 
              including firewall rules, TLS termination, and network segmentation.
            </p>
            
            {/* Highlights */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                { title: "Infrastructure as Code", desc: "Docker containers with proper network segmentation" },
                { title: "Security Hardening", desc: "Firewall, TLS, controlled ingress/egress" },
                { title: "AI Workflow", desc: "n8n + MCP for scalable automation" },
                { title: "Production Debugging", desc: "Auth flows, JSON/HTML routing solved" }
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-800">{item.title}</h4>
                    <p className="text-stone-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Tech */}
            <div className="flex flex-wrap gap-2">
              {["Docker", "n8n", "Oracle Cloud", "Nginx", "MCP", "Linux", "Security"].map((tech) => (
                <span key={tech} className="bg-stone-100 text-stone-700 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-stone-800 mb-12 text-center">Other Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "NoDash", desc: "US Stock Dashboard for Thai investors with real-time data", tech: ["React", "TypeScript", "Supabase"], url: "https://github.com/d234mkikodo/NoDash" },
              { name: "Dashboard_XBRL", desc: "XBRL data viewer for SEC financial reports", tech: ["React", "Node.js", "SEC API"], url: "https://github.com/d234mkikodo/Dashboard_XBRL" },
              { name: "spacehub", desc: "Flutter social media app with Firebase backend", tech: ["Flutter", "Firebase", "Dart"], url: "https://github.com/d234mkikodo/spacehub" },
              { name: "go-api", desc: "REST API with CRUD operations and middleware", tech: ["Go", "REST API", "PostgreSQL"], url: "https://github.com/d234mkikodo/go-api" },
              { name: "n8n-workflow", desc: "TTS automation with ElevenLabs and Discord", tech: ["n8n", "ElevenLabs", "Discord"], url: "https://github.com/d234mkikodo/n8n-workflow" }
            ].map((project) => (
              <a key={project.name} href={project.url} target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl p-6 border border-stone-200 hover:border-amber-300 hover:shadow-lg transition group">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-stone-800 group-hover:text-amber-700 transition">{project.name}</h3>
                  <Github className="w-5 h-5 text-stone-400 group-hover:text-amber-700 transition" />
                </div>
                <p className="text-stone-600 text-sm mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs bg-stone-100 text-stone-600 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-stone-800 mb-12 text-center">Skills & Technologies</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Flutter", "HTML/CSS"] },
              { title: "Backend", items: ["Node.js", "Go", "Python", "REST APIs", "PostgreSQL"] },
              { title: "Cloud & DevOps", items: ["Docker", "Oracle Cloud", "Azure", "Nginx", "Linux"] },
              { title: "Tools & Others", items: ["Git", "n8n", "Security", "CI/CD", "MCP"] }
            ].map((category) => (
              <div key={category.title}>
                <h3 className="font-semibold text-stone-800 mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span key={skill} className="bg-stone-100 text-stone-700 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-stone-800 mb-4">Let's Work Together</h2>
          <p className="text-stone-600 mb-8">Currently open to full-time opportunities in the United States</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:dream.seat2@gmail.com" className="flex items-center justify-center gap-2 bg-amber-700 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition">
              <Mail className="w-5 h-5" />
              dream.seat2@gmail.com
            </a>
            <a href="https://github.com/d234mkikodo" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-stone-800 text-white px-6 py-3 rounded-lg hover:bg-stone-700 transition">
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-stone-400">
          <p>© 2026 DDD1337. Built with passion for clean code and automation.</p>
        </div>
      </footer>
    </div>
  );
}
