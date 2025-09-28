import Cards from "./Cards";
import Logbutton from "./Logbutton";
import Navbar from "./Navbar";
import { FaLongArrowAltRight, FaArrowUp } from "react-icons/fa";

const Times = [
  {
    id: 1,
    amount: 12,
    title: "Years of Experience",
    description: "Building excellence since 2012",
  },
  {
    id: 2,
    amount: 88,
    title: "Success Projects",
    description: "Completed with precision",
  },
  {
    id: 3,
    amount: 14,
    title: "Active Projects",
    description: "Currently in development",
  },
  {
    id: 4,
    amount: 93,
    title: "Happy Customers",
    description: "Satisfied clients worldwide",
  },
];

export default function Home() {
  return (
    <main id="main" className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/Main.jpg')] bg-cover bg-center bg-no-repeat opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-transparent to-secondary-900/20"></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
            <div className="mb-8">
              <Logbutton />
            </div>

            <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-tight">
                <span className="text-gradient-accent">H Cube</span>
                <br />
                <span className="text-white">Architects</span>
              </h1>

              <p className="text-xl sm:text-2xl md:text-3xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
                Crafting extraordinary spaces that inspire and transform lives
                through innovative architectural design.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
                <button className="btn-primary group text-lg px-8 py-4 rounded-2xl">
                  Get Started
                  <FaLongArrowAltRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <button className="btn-outline text-lg px-8 py-4 rounded-2xl border-white text-white hover:bg-white hover:text-neutral-900">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8 animate-slide-up">
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 leading-tight">
                  We Create the Art of{" "}
                  <span className="text-gradient">Soulful & Stylish</span>{" "}
                  Living
                </h2>
                <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed">
                  Our architectural vision transforms spaces into living works
                  of art, blending functionality with aesthetic excellence to
                  create environments that inspire and elevate the human
                  experience.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-600 font-bold text-lg">
                      📞
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500 uppercase tracking-wide font-medium">
                      Contact
                    </p>
                    <p className="text-xl font-mono font-bold text-primary-600">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>

                <button className="btn-accent group text-lg px-8 py-4 rounded-2xl">
                  Get Consultation
                  <FaLongArrowAltRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="relative rounded-3xl overflow-hidden shadow-hard">
                <img
                  src="Herobg.jpg"
                  alt="Architectural Design"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-neutral-700 mb-4">
              Trusted by Industry Leaders
            </h3>
            <p className="text-neutral-500">
              We're proud to work with these amazing partners
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-items-center">
            {[
              "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQtlC60bSdavbnBA6vl2qcAPiJzPHDz5EM7qmGmuUdvGz6Ou5jY",
              "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRMTmiN2Wnu4D2iXJIexgVBCaJleN6qXIwdC-dJd-VmxtZUZTv6",
              "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQxv5SvbI-cDMeGADfaKaJF9dH2k5onvtXBudBURv6DpeGVn090",
              "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTej3VwGXauIbF_G2xUj7ZkxWNTV06bMeeQNQ9b6CsEa-LY6F5Z",
            ].map((src, index) => (
              <div key={index} className="group">
                <img
                  src={src}
                  alt={`Partner ${index + 1}`}
                  className="h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
              Connect. Learn. Earn.
            </h2>
            <p className="text-xl sm:text-2xl text-primary-100 leading-relaxed">
              Join our community of architects, designers, and visionaries
              shaping the future of design.
            </p>
          </div>
        </div>
      </section>

      {/* Media Section */}
      <section id="media" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Cards />
        </div>
      </section>

      {/* Testimonials & Stats Section */}
      <section id="contacts" className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Testimonial */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="card-premium p-8 sm:p-12">
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-900 mb-6">
                What People Think About Us
              </h3>
              <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed">
                "Working with H Cube Architects has been an absolute pleasure.
                Their attention to detail, innovative designs, and commitment to
                excellence have transformed our vision into reality. They truly
                understand the art of creating spaces that inspire."
              </p>
              <div className="mt-8">
                <p className="text-primary-600 font-semibold text-lg">
                  Sarah Johnson
                </p>
                <p className="text-neutral-500">CEO, Design Studio</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {Times.map((time) => (
              <div key={time.id} className="text-center group">
                <div className="card-premium p-6 sm:p-8 hover:scale-105 transition-all duration-300">
                  <div className="text-4xl sm:text-5xl font-bold text-gradient-accent mb-2">
                    {time.amount}
                  </div>
                  <div className="text-lg font-semibold text-neutral-900 mb-2">
                    {time.title}
                  </div>
                  <div className="text-sm text-neutral-500">
                    {time.description}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Back to Top */}
          <div className="text-center mt-16">
            <a
              href="#main"
              className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200 group"
            >
              <span>Back to Top</span>
              <FaArrowUp className="group-hover:-translate-y-1 transition-transform duration-200" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <img
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcThmkIy96XvAqu-WnHdu4hdYDLnRYyoJ1fg1ocgsoSqSlsRvirG"
                alt="H Cube Architects Logo"
                className="h-16 w-auto"
              />
              <p className="text-neutral-400 max-w-md">
                Creating extraordinary architectural experiences that inspire
                and transform communities worldwide.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 sm:gap-8 justify-start md:justify-end">
              {[
                "For Designers",
                "Hire Talent",
                "Inspiration",
                "Advertising",
                "Blog",
                "About",
                "Careers",
              ].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-neutral-300 hover:text-white transition-colors duration-200 font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div className="border-t border-neutral-800 mt-12 pt-8 text-center">
            <p className="text-neutral-400">
              © 2024 H Cube Architects. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
