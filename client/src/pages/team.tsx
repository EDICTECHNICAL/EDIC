import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { User, Mail, Linkedin, Github, Award, Users as UsersIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import AyushImg from "@assets/Ayush.jpg";
import AhanaImg from "@assets/Ahana.png";
import BhummiImg from "@assets/Bhummi.jpg";
import HredeyImg from "@assets/Hredey.jpg";
import RajImg from "@assets/Raj Mane.jpg";
import TanviImg from "@assets/Tanvi.jpg";
import anushkaImg from "@assets/anushka.jpg";
import nidhiImg from "@assets/nidhi.jpg";
import rashiImg from "@assets/rashi.jpg";
import kushalImg from "@assets/kushal.jpg";
import yashImg from "@assets/yash.jpg";
import khatriImg from "@assets/khatri.jpg";
import anshImg from "@assets/ansh.jpg";
import vinayakImg from "@assets/vinayak.jpg";
import aniketImg from "@assets/aniket.jpg";
import harshaImg from "@assets/harsha.jpg";
import shitalImg from "@assets/shital.jpg";
import siddeshImg from "@assets/siddhesh.jpg";
import sayyamImg from "@assets/sayyam.jpg";
import krishImg from "@assets/krish.jpg";
import nidhitImg from "@assets/nidhit.png";

export default function Team() {
  const facultyCoordinators = [
    {
      name: "Mr. Vinayak Bachal",
      role: "Faculty Coordinator",
      department: "CIVIL",
      email: "vinayak.bachal@tcetmumbai.in",
      photo: vinayakImg

    },
    {
      name: "Mr. Aniket Deo",
      role: "Faculty Coordinator",
      department: "AIDS",
      email: "aniket.deo@tcetmumbai.in",
      photo: aniketImg
    },
    {
      name: "Ms. Apeksha Waghmare",
      role: "Faculty Coordinator",
      department: "IT",
      email: "apeksha.waghmare@tcetmumbai.in"
    },
    {
      name: "Ms. Seema Nagrani",
      role: "Faculty Coordinator",
      department: "MECH",
      email: "seema.nagrani@tcetmumbai.in"
    },
    {
      name: "Mr. Ashish Dwivedi",
      role: "Faculty Coordinator",
      department: "COMP",
      email: "ashish.dwivedi@tcetmumbai.in"
    },
    {
      name: "Mrs Harsha Sanap",
      role: "Faculty Coordinator",
      department: "E&CS",
      email: "harsha.sanap@tcetmumbai.in",
      photo: harshaImg
      
    },
    {
      name: "Ms. Usha Gupta",
      role: "Faculty Coordinator",
      department: "IoT",
      email: "usha.gupta@tcetmumbai.in",
      
    },
    {
      name: "Mr. Siddhesh Mane",
      role: "Faculty Coordinator",
      department: "MME",
      email: "siddhesh.mane@tcetmumbai.in",
      photo: siddeshImg
    },
    {
      name: "Mrs. Shital Pazare",
      role: "Faculty Coordinator",
      department: "AIML",
      email: "shital.pazare@tcetmumbai.in",
      photo: shitalImg
    },
    {
      name: "Dr. Nidhi Tiwari",
      role: "Faculty Coordinator",
      department: "ES&H",
      email: "nidhi.tiwari@tcetmumbai.in",
      photo: nidhitImg
    }
  ];

  const coreTeam = [
    {
      name: "Ayush Pardeshi",
      class: "TE",
      branch: "E&CS",
      division: "A",
      rollNo: "2",
      position: "Chief Executive Officer",
      photo: AyushImg
    },
    {
      name: "Ahana Kulkarni",
      class: "TE",
      branch: "AI&DS",
      division: "A",
      rollNo: "41",
      position: "Chief Technology Officer",
      photo: AhanaImg
    },
    {
      name: "Bhummi Girnara",
      class: "TE",
      branch: "AI&DS",
      division: "A",
      rollNo: "19",
      position: "Chief Operating Officer",
      photo: BhummiImg
    },
    {
      name: "Khushal Satyapal",
      class: "TE",
      branch: "EXTC",
      division: "B",
      rollNo: "16",
      position: "Chief Marketing Officer",
      photo: kushalImg
    },
    {
      name: "Yash Khatri",
      class: "SE",
      branch: "COMP",
      division: "B",
      rollNo: "17",
      position: "Chairperson",
      photo: khatriImg
    },
    {
      name: "Anushka Yadav",
      class: "TE",
      branch: "Comps",
      division: "C",
      rollNo: "53",
      position: "Vice-Chairperson",
      photo: anushkaImg
    },
    {
      name: "Krish Jain",
      class: "SE",
      branch: "COMP",
      division: "A",
      rollNo: "57",
      position: "Outreach Head",
      photo: krishImg
    },
    {
      name: "Raj Mane",
      class: "FE",
      branch: "COMP",
      division: "B",
      rollNo: "29",
      position: "Tech Lead",
      photo: RajImg
    },
    {
      name: "Ansh Singh",
      class: "SE",
      branch: "ECS",
      division: "NA",
      rollNo: "48",
      position: "Creative Head",
      photo: anshImg
    },
    {
      name: "Rashi Bedse",
      class: "TE",
      branch: "COMP",
      division: "A",
      rollNo: "13",
      position: "Social Media Manager",
      photo: rashiImg
    },
    {
      name: "Sayyam Lohade",
      class: "SE",
      branch: "Comp",
      division: "B",
      rollNo: "25",
      position: "Secretary",
      photo: sayyamImg
    },
    {
      name: "Nidhi Dilipkumar Shukla",
      class: "SE",
      branch: "AI & ML",
      division: "C",
      rollNo: "21",
      position: "Event Manager",
      photo: nidhiImg
    },
    {
      name: "Tanvi Prakash Jabare",
      class: "SE",
      branch: "ECS",
      division: "N/A",
      rollNo: "20",
      position: "Publication Head",
      photo: TanviImg
    },
    {
      name: "Hredey Chaand",
      class: "SE",
      branch: "Comp",
      division: "A",
      rollNo: "10",
      position: "PR Head",
      photo: HredeyImg
    },
    {
      name: "Yash Yadav",
      class: "SE",
      branch: "AIML",
      division: "C",
      rollNo: "63",
      position: "Sponsorship Head",
      photo: yashImg
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--tcet-dark)] dark:text-white mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl text-[var(--tcet-dark)]/70 dark:text-white/70 leading-relaxed">
              Passionate individuals dedicated to fostering innovation and entrepreneurship at TCET
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Coordinators */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--tcet-dark)] dark:text-white mb-4">
              Faculty Coordinators
            </h2>
            <p className="text-lg text-[var(--tcet-dark)]/70 dark:text-white/70 max-w-2xl mx-auto">
              Dedicated faculty members from all departments supporting student entrepreneurship
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {facultyCoordinators.map((coordinator, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-[var(--tcet-blue)]">
  {coordinator.photo ? (
    <img
      src={coordinator.photo}
      alt={coordinator.name}
      className="w-full h-full object-cover"
    />
  ) : (
    <div className="w-full h-full bg-[var(--tcet-blue)]/10 dark:bg-[var(--tcet-blue)]/20 flex items-center justify-center">
      <User className="w-8 h-8 text-[var(--tcet-blue)]" />
    </div>
  )}
</div>

                  <h3 className="text-lg font-bold text-[var(--tcet-dark)] dark:text-white mb-1">{coordinator.name}</h3>
                  <div className="text-[var(--tcet-blue)] font-semibold text-sm mb-1">{coordinator.role}</div>
                  <div className="text-[var(--tcet-dark)]/60 dark:text-white/60 text-xs">{coordinator.department}</div>
                </div>

                <div className="space-y-3">
                  <div className="text-center">
                    <p className="text-[var(--tcet-dark)]/70 dark:text-white/70 text-sm">
                      Department Faculty Coordinator
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                  <a 
                    href={`mailto:${coordinator.email}`}
                    className="flex items-center justify-center text-[var(--tcet-blue)] hover:text-blue-700 transition-colors duration-200 text-sm"
                    title="Send Email"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Contact
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--tcet-dark)] dark:text-white mb-4">
              Core Team Members
            </h2>
            <p className="text-lg text-[var(--tcet-dark)]/70 dark:text-white/70 max-w-2xl mx-auto">
              Student leaders driving innovation and entrepreneurship initiatives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {coreTeam.map((member, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-6">
                 <div className="text-center mb-6">
  <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center mx-auto mb-4 border-2 border-[var(--tcet-blue)]">
    {member.photo ? (
      <img
        src={member.photo}
        alt={member.name}
        className="w-full h-full object-cover"
      />
    ) : (
      <User className="w-10 h-10 text-[var(--tcet-blue)]" />
    )}
  </div>
  
</div>

                  <h3 className="text-lg font-bold text-[var(--tcet-dark)] dark:text-white mb-1">{member.name}</h3>
                  <div className="text-[var(--tcet-blue)] font-semibold mb-2 text-sm">{member.position}</div>
                </div>

                <div className="space-y-3">
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <span className="text-[var(--tcet-dark)]/60 dark:text-white/60">Class:</span>
                        <div className="font-semibold text-[var(--tcet-dark)] dark:text-white">{member.class}</div>
                      </div>
                      <div>
                        <span className="text-[var(--tcet-dark)]/60 dark:text-white/60">Branch:</span>
                        <div className="font-semibold text-[var(--tcet-dark)] dark:text-white">{member.branch}</div>
                      </div>
                      <div>
                        <span className="text-[var(--tcet-dark)]/60 dark:text-white/60">Division:</span>
                        <div className="font-semibold text-[var(--tcet-dark)] dark:text-white">{member.division}</div>
                      </div>
                      <div>
                        <span className="text-[var(--tcet-dark)]/60 dark:text-white/60">Roll No:</span>
                        <div className="font-semibold text-[var(--tcet-dark)] dark:text-white">{member.rollNo}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20 bg-[var(--tcet-blue)] text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <UsersIcon className="w-16 h-16 mx-auto mb-6 text-white/90" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to Join Our Team?</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              We're always looking for passionate students and faculty members who share our vision of fostering entrepreneurship and innovation at TCET.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Button
  className="bg-white text-[var(--tcet-blue)] hover:bg-gray-100 hover:text-[var(--tcet-dark)] px-8 py-3 font-semibold border border-gray-200 transition"
>
  Apply to Join
</Button>

<Button
  className="bg-white text-[var(--tcet-blue)] hover:bg-gray-100 hover:text-[var(--tcet-dark)] px-8 py-3 font-semibold border border-gray-200 transition"
>
  Learn More
</Button>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}