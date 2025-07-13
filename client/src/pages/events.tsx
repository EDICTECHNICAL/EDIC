import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, MapPin, Users, Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { link } from "fs";

export default function Events() {
  const featuredEvents = [
   
    {
  title: "MSME Hackathon 5.0 - College Level Round",
  date: "Declaring Soon",
  time: "Declaring Soon",
  location: "Thakur College Campus (Offline)",
  description: "Opportunity for innovators to pitch, build, and collaborate on projects as part of MSME Hackathon 5.0. Compete for a ₹15 Lakh prize pool, incubation support, networking, and project collaborations. Open to students with new ideas or ongoing projects.",
  image: "/api/placeholder/600/300",
  featured: true,
  status: "upcoming",
  attendees: "Open to all college students",
  type: "Hackathon"
},
{
  title: "WYSD Innovation Pitch Competition",
  date: "July 15, 2025",
  time: "10:00 AM - 5:00 PM",
  location: "Thakur College Auditorium",
  description: "Pitch your startup idea or project in front of mentors and industry experts. Prepare a pitch deck and poster within a 5-7 minute slot. Hardware prototypes are welcome for live demos. Teams with MSME or legal registrations should carry relevant certificates or approval letters for reference.",
  image: "/api/placeholder/600/300",
  featured: true,
  status: "upcoming",
  attendees: "All registered student teams",
  type: "Pitch Competition",
  incentives: [
    "Certificates",
    "Trophies to Winners",
    "Incubation Opportunity",
    "Network Connect",
    "Mentorship"
  ]
}



  ];

  const allEvents = [
     {
  title: "MSME Hackathon 5.0 - College Level Round",
  date: "Declaring Soon",
  time: "Declaring Soon",
  location: "Thakur College Campus (Offline)",
  description: "Opportunity for innovators to pitch, build, and collaborate on projects as part of MSME Hackathon 5.0. Compete for a ₹15 Lakh prize pool, incubation support, networking, and project collaborations. Open to students with new ideas or ongoing projects.",
  image: "/api/placeholder/600/300",
  status: "upcoming",
  attendees: "Open to all college students",
  type: "Hackathon"
},
{
  title: "WYSD Innovation Pitch Competition",
  date: "July 15, 2025",
  time: "10:00 AM - 5:00 PM",
  location: "Thakur College Auditorium",
  description: "Pitch your startup idea or project in front of mentors and industry experts. Prepare a pitch deck and poster within a 5-7 minute slot. Hardware prototypes are welcome for live demos. Teams with MSME or legal registrations should carry relevant certificates or approval letters for reference.",
  image: "/api/placeholder/600/300",
  status: "upcoming",
  attendees: "All registered student teams",
  type: "Pitch Competition",
  incentives: [
    "Certificates",
    "Trophies to Winners",
    "Incubation Opportunity",
    "Network Connect",
    "Mentorship"
  ]
},
    
     {
      title: "TCS & Capgemini Industry Connect",
      date: "March 15, 2025",
      time: "10:00 AM - 5:00 PM",
      location: "TCET Auditorium",
      description: "Direct interaction with industry leaders from TCS and Capgemini. Learn about emerging technologies, career opportunities, and get insights into real-world projects. Network with professionals and explore internship possibilities.",
      image: "/api/placeholder/600/300",
      status: "past",
      attendees: "200+",
      type: "Industry Connect",
      link: "https://drive.google.com/drive/folders/1nJo5Vlladbixoj_HEi_Ik24bKag3iHSw?usp=drive_link"
    },
    {
      title: "CEO Talks",
      date: "February 28, 2025", 
      time: "2:00 PM - 4:00 PM",
      location: "Innovation Lab",
      description: "Interactive session with successful startup CEOs sharing their entrepreneurial journey, challenges faced, and strategies for building successful ventures. Get inspired by real success stories and actionable advice.",
      image: "/api/placeholder/600/300",
      status: "past",
      attendees: "150+",
      type: "Leadership",
      link: "https://docs.google.com/document/d/1IPy-cGGy1cCwLZ-wsBECZLZym76MlkvI/edit?usp=sharing&ouid=116523413157790105861&rtpof=true&sd=true"

    },
    {
      title: "Startup Day",
      date: "January 20, 2025",
      time: "9:00 AM - 6:00 PM",
      location: "TCET Campus",
      description: "Annual startup showcase featuring student entrepreneurs, pitch competitions, and networking opportunities.",
      status: "past",
      attendees: "300+",
      type: "Competition",
      link: "https://drive.google.com/drive/folders/1d5Wx9rFJhUea7S0kCEAySWAgmG5T8VGo?usp=sharing"
    },
    {
      title: "IITB Visit",
      date: "February 5, 2025",
      time: "10:00 AM - 4:00 PM", 
      location: "IIT Bombay",
      description: "Educational visit to IIT Bombay incubation center and research facilities for inspiration and learning.",
      status: "past",
      attendees: "50+",
      type: "Educational",
      link: "https://drive.google.com/drive/folders/17W44Iv-3EFxIw98pfe940BV1eb-bLJlu?usp=sharing"
    },
    {
      title: "Coffee with Alumni",
      date: "February 12, 2025",
      time: "4:00 PM - 6:00 PM",
      location: "TCET Cafeteria",
      description: "Informal networking session with successful TCET alumni working in startups and established companies.",
      status: "past", 
      attendees: "80+",
      type: "Networking",
      link: "https://drive.google.com/drive/folders/17ODs-XU01dstJO3a6f4xnyLQ3sLvmsG6?usp=sharing"
    },
    {
      title: "Data Vision",
      date: "March 8, 2025",
      time: "1:00 PM - 5:00 PM",
      location: "Computer Lab",
      description: "Data analytics and visualization workshop focusing on business intelligence and data-driven decision making.",
      status: "past",
      attendees: "100+",
      type: "Workshop",
      link: "https://drive.google.com/drive/folders/10GlNbkxGq9NqVgGYFB3IldV1XXEzigFE?usp=sharing"
    },
    {
      title: "Startup Expo",
      date: "March 22, 2025",
      time: "10:00 AM - 6:00 PM",
      location: "TCET Main Ground",
      description: "Large-scale exhibition featuring startup displays, investor meetings, and product demonstrations.",
      status: "past",
      attendees: "500+",
      type: "Exhibition",
      link: "https://drive.google.com/drive/folders/1U77fRoLB3ZHWkCp2rIwnetoWwaHEqA5m?usp=sharing"
    },
    {
      title: "Ideathon 2.0",
      date: "April 5, 2025",
      time: "9:00 AM - 8:00 PM",
      location: "Innovation Center",
      description: "24-hour idea generation and prototyping competition with themes around sustainable technology and social impact.",
      status: "past",
      attendees: "200+",
      type: "Competition",
      link: "https://drive.google.com/drive/folders/14uu1ZvVnK6GmyNLD83tSXmaeqK2DAAbC?usp=sharing"
    },
    {
      title: "PTM - Project Display",
      date: "April 15, 2025",
      time: "11:00 AM - 4:00 PM",
      location: "Project Display Hall",
      description: "Student project showcase featuring innovative solutions, research work, and entrepreneurial ventures.",
      status: "past",
      attendees: "400+",
      type: "Showcase",
      link: "https://drive.google.com/drive/folders/1OisMVevTFbMkYbdPI3tEIkMPvZK1g-kC?usp=sharing"
    },
    {
      title: "MSME Workshop",
      date: "April 25, 2025",
      time: "2:00 PM - 6:00 PM",
      location: "Seminar Hall",
      description: "Micro, Small & Medium Enterprises development workshop covering registration, funding, and growth strategies.",
      status: "past",
      attendees: "120+",
      type: "Workshop",
      link: "https://drive.google.com/drive/folders/1xOYviHcankkMOA62HuRsOoFGD6F6K_vG?usp=sharing"
    },
    {
      title: "Mind's Eye Project Competition",
      date: "May 8, 2025",
      time: "10:00 AM - 5:00 PM",
      location: "Competition Arena",
      description: "Creative problem-solving competition challenging students to develop innovative solutions for real-world problems.",
      status: "past",
      attendees: "180+",
      type: "Competition",
      link: "https://drive.google.com/drive/folders/10eZv8qALtUFX-KGqaUkR1HK7C-T4nB_p?usp=sharing"
    },
    {
      title: "Startup Charcha",
      date: "May 15, 2025",
      time: "3:00 PM - 5:00 PM",
      location: "Discussion Room",
      description: "Interactive discussion forum for aspiring entrepreneurs to share ideas, challenges, and seek mentorship.",
      status: "past",
      attendees: "60+",
      type: "Discussion",
      link: "https://drive.google.com/drive/folders/1d5Wx9rFJhUea7S0kCEAySWAgmG5T8VGo?usp=sharing"
    },
    {
      title: "Ideathon 1.0",
      date: "December 10, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "Innovation Lab",
      description: "First edition of the ideathon focusing on healthcare and education technology solutions.",
      status: "past",
      attendees: "150+",
      type: "Competition",
      link: "https://drive.google.com/drive/folders/1eBPYQKHOT4FzZQMLsTwLpj4gQiobpYcd?usp=sharing"
    },
    {
      title: "Entrepreneur Meet & Greet",
      date: "November 20, 2024",
      time: "4:00 PM - 7:00 PM",
      location: "Networking Lounge",
      description: "Casual networking event connecting students with local entrepreneurs and business mentors.",
      status: "past",
      attendees: "90+",
      type: "Networking",
      link: "https://drive.google.com/drive/folders/1U77fRoLB3ZHWkCp2rIwnetoWwaHEqA5m?usp=sharing"
    },
    {
      title: "Tech Innovation Summit",
      date: "October 15, 2024",
      time: "10:00 AM - 6:00 PM",
      location: "Main Auditorium",
      description: "Technology-focused summit featuring emerging trends, AI applications, and digital transformation.",
      status: "past",
      attendees: "300+",
      type: "Summit",
      link: "https://drive.google.com/drive/folders/10GlNbkxGq9NqVgGYFB3IldV1XXEzigFE?usp=sharing"
    },
    {
      title: "Business Plan Workshop",
      date: "September 28, 2024",
      time: "1:00 PM - 5:00 PM",
      location: "Workshop Hall",
      description: "Comprehensive workshop on creating effective business plans, financial projections, and investor presentations.",
      status: "past",
      attendees: "100+",
      type: "Workshop",
      link: "https://drive.google.com/drive/folders/10GlNbkxGq9NqVgGYFB3IldV1XXEzigFE?usp=sharing"
    },
    {
      title: "Innovation Bootcamp",
      date: "August 12, 2024",
      time: "9:00 AM - 7:00 PM",
      location: "Bootcamp Center",
      description: "Intensive training program covering design thinking, lean startup methodology, and product development.",
      status: "past",
      attendees: "80+",
      type: "Bootcamp",
      link: "https://drive.google.com/drive/folders/10GlNbkxGq9NqVgGYFB3IldV1XXEzigFE?usp=sharing"
    }
  ];

  const upcomingEvents = allEvents.filter(event => event.status === "upcoming");
  const pastEvents = allEvents.filter(event => event.status === "past");

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--tcet-dark)] dark:text-white mb-6">
              Events & Workshops
            </h1>
            <p className="text-xl text-[var(--tcet-dark)]/70 dark:text-white/70 leading-relaxed">
              Join us for exciting events, workshops, and networking opportunities designed to fuel your entrepreneurial journey
            </p>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--tcet-dark)] dark:text-white mb-4">
              Featured Events
            </h2>
            <p className="text-lg text-[var(--tcet-dark)]/70 dark:text-white/70 max-w-2xl mx-auto">
              Don't miss these flagship events that will shape your entrepreneurial future
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            {featuredEvents.map((event, index) => (
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-l-[var(--tcet-blue)]">
                <div className="h-48 bg-gradient-to-br from-[var(--tcet-blue)]/10 to-blue-100 dark:from-[var(--tcet-blue)]/20 dark:to-blue-900/30 flex items-center justify-center">
                  <div className="text-center">
                    <Star className="w-16 h-16 text-[var(--tcet-blue)] mx-auto mb-2" />
                    <Badge variant="secondary" className="bg-[var(--tcet-blue)] text-white">
                      {event.type}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl text-[var(--tcet-dark)] dark:text-white mb-2">
                        {event.title}
                      </CardTitle>
                      <div className="flex items-center text-[var(--tcet-blue)] mb-2">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">{event.date}</span>
                      </div>
                    </div>
                    <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                      Featured
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-[var(--tcet-dark)]/70 dark:text-white/70 mb-4 leading-relaxed">
                    {event.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-[var(--tcet-dark)]/60 dark:text-white/60">
                      <Clock className="w-4 h-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-[var(--tcet-dark)]/60 dark:text-white/60">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm text-[var(--tcet-dark)]/60 dark:text-white/60">
                      <Users className="w-4 h-4 mr-2" />
                      Expected: {event.attendees}
                    </div>
                  </div>

                  <Button className="w-full bg-[var(--tcet-blue)] hover:bg-blue-700">
                    Register Now
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Events */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--tcet-dark)] dark:text-white mb-4">
              All Events
            </h2>
            <p className="text-lg text-[var(--tcet-dark)]/70 dark:text-white/70 max-w-2xl mx-auto">
              Complete list of EDIC events, workshops, and activities
            </p>
          </div>

          <Tabs defaultValue="upcoming" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="upcoming">Upcoming Events ({upcomingEvents.length})</TabsTrigger>
              <TabsTrigger value="past">Past Events ({pastEvents.length})</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingEvents.map((event, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="outline" className="text-[var(--tcet-blue)] border-[var(--tcet-blue)]">
                          {event.type}
                        </Badge>
                        <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                          Upcoming
                        </Badge>
                      </div>
                      <CardTitle className="text-lg text-[var(--tcet-dark)] dark:text-white">
                        {event.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-[var(--tcet-dark)]/70 dark:text-white/70 text-sm mb-4">
                        {event.description}
                      </p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-xs text-[var(--tcet-dark)]/60 dark:text-white/60">
                          <Calendar className="w-3 h-3 mr-2" />
                          {event.date}
                        </div>
                        <div className="flex items-center text-xs text-[var(--tcet-dark)]/60 dark:text-white/60">
                          <Clock className="w-3 h-3 mr-2" />
                          {event.time}
                        </div>
                        <div className="flex items-center text-xs text-[var(--tcet-dark)]/60 dark:text-white/60">
                          <MapPin className="w-3 h-3 mr-2" />
                          {event.location}
                        </div>
                        <div className="flex items-center text-xs text-[var(--tcet-dark)]/60 dark:text-white/60">
                          <Users className="w-3 h-3 mr-2" />
                          Expected: {event.attendees}
                        </div>
                      </div>

                      <Button size="sm" className="w-full bg-[var(--tcet-blue)] hover:bg-blue-700">
                        Register
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="past">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pastEvents.map((event, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300 opacity-90">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="outline" className="text-[var(--tcet-dark)]/60 dark:text-white/60">
                          {event.type}
                        </Badge>
                        <Badge variant="secondary">
                          Completed
                        </Badge>
                      </div>
                      <CardTitle className="text-lg text-[var(--tcet-dark)] dark:text-white">
                        {event.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-[var(--tcet-dark)]/70 dark:text-white/70 text-sm mb-4">
                        {event.description}
                      </p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-xs text-[var(--tcet-dark)]/60 dark:text-white/60">
                          <Calendar className="w-3 h-3 mr-2" />
                          {event.date}
                        </div>
                        <div className="flex items-center text-xs text-[var(--tcet-dark)]/60 dark:text-white/60">
                          <Users className="w-3 h-3 mr-2" />
                          Attended: {event.attendees}
                        </div>
                      </div>

                      <Button size="sm" variant="outline" className="w-full">
    <a
        href={event.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        See Details
        <ExternalLink className="w-3 h-3 ml-2" />
      </a>


                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
}