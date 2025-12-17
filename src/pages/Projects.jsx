import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const PROJECTS = [
  {
    title: '🩺 Hospital Management System',
    desc: 'A comprehensive, role-based healthcare management system built with PHP and MySQL that streamlines medical operations and improves patient care through specialized dashboards for patients, doctors, and administrators.',
    ss: '/Public/Me/HMS.jpg',
    tech: ['HTML', 'CSS', 'PHP', 'JavaScript', 'MySQL'],
    code: 'https://github.com/mohtasim2003/Hospital-Management-System'
  },
  {
  title: 'Shop Management System',
  desc: 'A Java-based desktop application built using Java and Swing for managing shop operations such as employee management, product tracking, and sales management.',
  ss: '/Public/Me/Shop.jpg',
  tech: ['JAVA', 'GUI Framework', 'Swing'],
  code: 'https://github.com/mohtasim2003/Shop-Management-System'
  },
  {
    title: 'Crop Recommendation System',
    desc: 'Developed a robust precision agriculture system merging real-time IoT sensing with Machine Learning. It features a unique fail-safe against sensor errors to ensure reliable, accurate crop recommendations for farmers.',
    ss: '../Public/Me/Introcuction.png',
    tech: ['IoT Sensors', 'Machine Learning', 'Google Collab', 'Python', 'Firebase', 'OpenWeatherMap API'],
    code: '--'
  },
  {
  title: 'Arduino-Based Autonomous Floor Cleaning Robot',
  desc: 'Designed a cost-effective, autonomous cleaning robot using Arduino. It employs ultrasonic sensors for real-time obstacle avoidance and motorized brushes to clean tiles, wood, and carpet efficiently.',
  ss: '../Public/Me/cleaner.jpg',
  tech: ['Arduino Uno', 'Ultrasonic Sensors', 'C++', 'L298N Motor Driver', 'DC Motors', 'Servo Motor'],
  code: '--'
  },
  {
    title: 'Air-Line Management System',
    desc: 'Developed a comprehensive platform to automate core airline tasks from scheduling to ticketing. This digital solution replaces manual workflows to ensure smooth operational flow and data integrity.',
    ss: '../Public/Me/air.jpg',
    tech: ['C#', 'T-SQL', 'SQL Server'],
    code: 'https://github.com/mohtasim2003/Air-Line-Management-System'
  },
  {
    title: 'Sea Port Simulation (Computer Graphics)',
    desc: 'Created an interactive Sea Port environment using C++ and OpenGL featuring real-time rendering of Day, Night and Rain atmospheric modes.',
    ss: '../Public/Me/port.jpg',
    tech: ['C++', 'OpenGL', 'GLUT'],
    code: 'https://github.com/mohtasim2003/Graphics-Project'
  },
  {
    title: 'University Management System',
    desc: 'A comprehensive technical report detailing the Software Development Life Cycle (SDLC) of a University Management System. This document covers: Requirements Analysis, System Design, Implementation, Testing, Deployment.',
    ss: '../Public/Me/SDLC.png',
    tech: ['Doccumentation'],
    code: 'https://github.com/mohtasim2003/UNIVERSITY-MANAGEMENT-SYPSTEM-Software-'
  }
]

export default function Projects() {
  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
    >
      <div className="card" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 30 }}>
        <motion.h2
          className="text-4xl font-semibold text-cyan-400 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          🚀 Projects
        </motion.h2>
        <p className="text-gray-400 mb-10">
          A collection of my major Projects - showcasing my skills in web development, software engineering & machine learning with Iot.
        </p>

        <div className="projects-grid" style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              style={{
                background: 'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))',
                border: '1px solid rgba(0,255,255,0.1)',
                borderRadius: 16,
                padding: 16,
                overflow: 'hidden',
                boxShadow: '0 0 20px rgba(0,255,255,0.08)'
              }}
            >
              <motion.div className="ss" whileHover={{ scale: 1.05 }} style={{ borderRadius: 12, overflow: 'hidden' }}>
                <img
                  src={p.ss}
                  alt={p.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: 12
                  }}
                />
              </motion.div>

              <div style={{ marginTop: 12 }}>
                <h3 style={{ fontSize: 18, color: '#0ea5e9', marginBottom: 6 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: '#bbb', marginBottom: 8, lineHeight: 1.6 }}>{p.desc}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: 'rgba(0,255,255,0.05)',
                        border: '1px solid rgba(0,255,255,0.1)',
                        padding: '3px 8px',
                        borderRadius: 6,
                        fontSize: 12,
                        color: '#aaf'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
                  <motion.a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'rgba(255,255,255,0.05)',
                      color: '#0ea5e9',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      border: '1px solid rgba(0,255,255,0.1)',
                      textDecoration: 'none'
                    }}
                  >
                    <Github size={14} /> Code
                  </motion.a>
                  <motion.a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'linear-gradient(90deg, #06b6d4, #0891b2)',
                      color: '#fff',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      textDecoration: 'none'
                    }}
                  >
                    <ExternalLink size={14} /> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}