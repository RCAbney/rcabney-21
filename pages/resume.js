import Layout from "../components/layout";
import Head from "next/head";

export default function ResumePage() {
  return (
    <>
      <Head>
        <title>Ryan Abney | Developer - Resume</title>
      </Head>
      <Layout>
        <section className="resume">
          <h1>Ryan Abney - Resume</h1>
          <p>
            Confident, versatile detail-oriented front-end developer skilled in
            researching and developing new production workflows. Previously a
            key figure in transitioning a billion-dollar publisher from Flash
            advertising to an HTML5 based workflow. Prior experiences include
            project management, information design, and military service.
          </p>
          <h2>Technical Skills</h2>
          <div className="skills">
            <div className="skillset">
              <h3>Languages</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>SASS</li>
                <li>JavaScript (ES6)</li>
              </ul>
            </div>
            <div className="skillset">
              <h3>Frameworks &amp; Libraries</h3>
              <ul>
                <li>Bootstrap/Foundation/Tailwind/MUI</li>
                <li>React</li>
                <li>Redux</li>
                <li>Next.js</li>
              </ul>
            </div>
            <div className="skillset">
              <h3>CMS</h3>
              <ul>
                <li>WordPress</li>
                <li>Shopify</li>
              </ul>
            </div>
            <div className="skillset">
              <h3>Tools</h3>
              <ul>
                <li>Adobe CC</li>
                <li>Git</li>
              </ul>
            </div>
          </div>

          <h2>Experience</h2>
          <h3>Byrider - Software Engineer</h3>
          <p>Nov 2021 - present</p>
          <ul>
            <li>
              Currently developing an internal application (React/Redux/.NET)
              designed to maximize dealership revenue.
            </li>
          </ul>
          <h3>Lessonly (acquired by Seismic Software) — Web Developer</h3>
          <p>Apr 2020 - Nov 2021</p>
          <p>
            I served Lessonly's brand team by developing and implementing
            digital experiences for our marketing website(s) including:
          </p>
          <ul>
            <li>
              Ollie Llama + Co. &ndash; Lessonly's clothing line, with over
              3,100 orders since launch.
            </li>
            <li>
              Lessonly's Training Plan Builder &ndash; a react-based application
              that allows leaders to craft a detailed training plan for their
              team.
            </li>
            <li>
              Llamanation &ndash; Lessonly's customer community, which has grown
              to over 1,000 members in just over a year.
            </li>
            <li>
              Project "Llamageddon" &ndash; a relaunch of some of our most
              trafficked customer-facing pages that saw conversion rates
              increase by up to 61% over previous iterations.
            </li>
            <li>
              Yellowship &ndash; Lessonly's annual better work conference.
            </li>
            <li>
              <a
                href="https://dobetterwork.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Do Better Work
              </a>{" "}
              &ndash; a site dedicated to Lessonly CEO Max Yoder's two books,{" "}
              <em>Do Better Work</em>, and <em>To See It, Be It.</em>
            </li>
          </ul>
          <h3>Ascension St. Vincent — Analyst - Technology (Contingent)</h3>
          <p>Jun 2016 - Dec 2019</p>
          <ul>
            <li>
              Designed and developed sites for Ascension’s foundations,
              residency programs, and fellowships.
            </li>
            <li>
              Consolidated 30+ stand-alone websites into St. Vincent's main
              site.
            </li>
            <li>Developed WordPress microsites for St. Vincent's partners.</li>
            <li>
              Worked with third-party vendors to launch St. Vincent's online
              provider finder, and developed an application that pulls data from
              their API to display provider rosters on St. Vincent's websites.
            </li>
          </ul>

          <h3>DesignIQ (formerly Gannett) — Digital Media Designer II</h3>
          <p>FEB 2013 - JAN 2016</p>
          <ul>
            <li>
              Designed landing pages and email blasts for white glove clients.
            </li>
            <li>
              Created HTML5 ad units that featured advanced interactivity such
              as games, videos, and event reporting.
            </li>
            <li>Developed a library that automated repetitive animations.</li>
            <li>Refactored legacy jQuery code into vanilla JavaScript.</li>
            <li>Performed QA checks on junior artist ads.</li>
          </ul>

          <h3>Fusework Studios — Graphic and Web Design Intern</h3>
          <p>JUN 2012 - AUG 2012</p>
          <ul>
            <li>Created WordPress site mock-ups for client presentations.</li>
            <li>
              Wrote blog posts, designed infographics, and prepared sales
              materials.
            </li>
          </ul>
          <h3>USIC Inc. —Billing Clerk</h3>
          <p>SEP 2004 - JAN 2012</p>
          <ul>
            <li>Audited daily billing records and prepared invoices.</li>
          </ul>
          <h3>GNC — Store Manager</h3>
          <p>JUN 2000 - JUL 2004</p>
          <ul>
            <li>
              Oversaw daily store operations, inventory management, hiring, and
              training of associates.
            </li>
          </ul>
          <h3>U.S. Navy — Navy Recruiting District, Houston, TX</h3>
          <p>AUG 1998 - JUN 2000</p>
          <ul>
            <li>
              Responsible for preparing enlisted recruits for a transition to
              military life.
            </li>
            <li>
              Prepared travel arrangements for recruits from Houston to RTC,
              Great Lakes, IL.
            </li>
            <li>
              Ensured accuracy of enlisted recruit packages and service records.
            </li>
          </ul>
          <h3>U.S. Navy — USS Rushmore (LSD-47)</h3>
          <p>AUG 1998 - JUN 2000</p>
          <ul>
            <li>
              Performed clerical and administrative duties involved in
              maintaining personnel records, preparing reports, and
              accomplishing accounting procedures.
            </li>
            <li>
              Utilized and maintained publications and directives to personnel
              administration and operated associated ADP equipment.
            </li>
          </ul>

          <h2>Education</h2>
          <h3>Ivy Tech Community College — A.A.S. - Visual Communications</h3>
          <p>JAN 2010 - DEC 2012</p>
          <p>Concentration in Web Design.</p>
          <ul>
            <li>3.96 GPA - Phi Theta Kappa Honor Society Member</li>
          </ul>
        </section>
      </Layout>
    </>
  );
}
