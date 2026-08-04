import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import "./blog.css";

export default function Blog() {
  const defaultPosts = [
    {
      id: 1,
      title: "My Journey from CSE Student to Software Engineer",
      text: "Becoming a software engineer was not a single-step achievement. It was a journey built through continuous learning, academic projects, internships, professional experience, and countless hours of practice. My journey into software engineering began while studying Computer Science and Engineering at AIUB. During university, I also worked on projects involving databases, machine learning, robotics, and web development. These projects helped me turn theoretical knowledge into practical skills. I learned that communication, teamwork, debugging, and planning are just as important as coding. My goal is to keep improving and build software that solves real-world problems.",
    },
    {
      id: 2,
      title: "Important Lessons I Learned as a Software Engineer",
      text: "Working as a software engineer has taught me that readable code is better than unnecessarily complex code. Clear naming, reusable components, and organized files make applications easier to maintain. I also learned that debugging requires patience and a step-by-step approach. Git and GitHub are essential for tracking changes and collaborating with team members. Understanding project requirements before coding helps reduce mistakes and unnecessary work. Testing is also important before deploying any application. Most importantly, software engineers must continue learning because technologies are always changing.",
    },
    {
      id: 3,
      title: "Artificial Intelligence Is Changing Software Development",
      text: "Artificial intelligence is changing how developers build and improve software. AI-powered tools can help with coding, debugging, testing, and documentation. AI also allows applications to provide recommendations, analyze data, automate tasks, and understand user input. Building an effective AI system requires proper data preparation, model selection, testing, and evaluation. Developers must also consider privacy, bias, security, and reliability. AI tools are not replacing developers, but they are helping developers work more efficiently. I want to explore how AI can be combined with full-stack development to create smarter applications.",
    },
    {
      id: 4,
      title: "What I Learned from Building Real-World Projects",
      text: "Building real-world projects has helped me understand software development beyond classroom theory. I learned how to convert business requirements into practical features and working solutions. Projects also taught me the importance of clean code, responsive design, database planning, and proper testing. I faced challenges involving deployment, API integration, authentication, and performance. Solving these problems improved my debugging and problem-solving skills. I also learned that communication and teamwork are essential for completing a project successfully. Every project gives me new experience and motivates me to become a better software engineer.",
    },
    {
      id: 5,
      title: "The Importance of Continuous Learning in Technology",
      text: "Software engineering is a field that is constantly evolving. New programming languages, frameworks, tools, and best practices are introduced regularly. To stay relevant, software engineers must continuously learn and adapt. I have learned to embrace online courses, tutorials, documentation, and community forums to improve my skills. I also follow industry news and trends to understand where the field is heading. Continuous learning helps me write better code, build more efficient applications, and solve problems more effectively. It also allows me to explore new areas like AI, cloud computing, and cybersecurity.",
    },
    {
      id: 6,
      title: "My Approach to Solving Programming Problems",
      text: "Problem-solving is one of the most important skills I have developed as a software engineer. When I face a problem, I first try to understand the requirements and identify the root cause. I then break the problem into smaller and more manageable parts. After that, I explore possible solutions and choose the one that is most efficient and maintainable. Testing each step helps me find errors and improve the final solution. I believe that patience, logical thinking, and consistent practice are key to becoming a better programmer. Every difficult problem is an opportunity to learn something new.",
    },
  ];

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const savedVotes = JSON.parse(localStorage.getItem("kd_blog_votes") || "{}");
    const votedByUser = JSON.parse(localStorage.getItem("kd_blog_voted") || "{}");
    const withVotes = defaultPosts.map((p) => ({
      ...p,
      agree: savedVotes[p.id]?.agree || 0,
      disagree: savedVotes[p.id]?.disagree || 0,
      userVote: votedByUser[p.id] || null,
    }));
    setPosts(withVotes);
  }, []);

  function vote(id, type) {
    const votedByUser = JSON.parse(localStorage.getItem("kd_blog_voted") || "{}");
    if (votedByUser[id]) return;

    const next = posts.map((p) =>
      p.id === id ? { ...p, [type]: p[type] + 1, userVote: type } : p
    );
    setPosts(next);

    const votes = Object.fromEntries(
      next.map((p) => [p.id, { agree: p.agree, disagree: p.disagree }])
    );
    localStorage.setItem("kd_blog_votes", JSON.stringify(votes));
    localStorage.setItem(
      "kd_blog_voted",
      JSON.stringify({ ...votedByUser, [id]: type })
    );
  }

  return (
    <motion.section
      className="blog-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="blog-title"
        initial={{ y: -15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        📝 My Blog
      </motion.h2>
      <p className="blog-sub">
        Personal thoughts, experiences, and reflections — feel free to react!
      </p>

      <div className="blog-grid">
        {posts.map((p, idx) => (
          <motion.div
            key={p.id}
            className="blog-post"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 0 20px rgba(255,255,255,0.1)",
            }}
          >
            <h3 className="post-title">{p.title}</h3>
            <p className="post-text">{p.text}</p>

            <div className="vote-container">
              <motion.button
                onClick={() => vote(p.id, "agree")}
                disabled={!!p.userVote}
                whileTap={{ scale: 0.85 }}
                whileHover={{ scale: 1.15 }}
                className={`vote-btn-circle agree ${
                  p.userVote === "agree" ? "active" : ""
                }`}
              >
                <ThumbsUp size={20} />
                <motion.span
                  key={p.agree}
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="vote-count"
                >
                  {p.agree}
                </motion.span>
              </motion.button>

              <motion.button
                onClick={() => vote(p.id, "disagree")}
                disabled={!!p.userVote}
                whileTap={{ scale: 0.85 }}
                whileHover={{ scale: 1.15 }}
                className={`vote-btn-circle disagree ${
                  p.userVote === "disagree" ? "active" : ""
                }`}
              >
                <ThumbsDown size={20} />
                <motion.span
                  key={p.disagree}
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="vote-count"
                >
                  {p.disagree}
                </motion.span>
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}