export default function Home() {
  return (
    <main className="prose">
      <h1>Aryan Baburajan</h1>
      <p>
        I'm an 18-year-old graphics / systems programmer from Kerala, India,
        currently studying Computer Science at Christ College of Engineering
        (2025–2029). I have been programming since I was 9, with a deep passion
        for building complex systems from scratch and understanding their
        architecture
      </p>
      <div className="flex flex-wrap gap-x-4 gap-y-2">
        <a href="https://github.com/aryanbaburajan" target="_blank">
          Github
        </a>
        <a href="./aryanbaburajan.pdf" target="_blank">
          Resume
        </a>
        <a href="https://x.com/aryanbaburajan" target="_blank">
          X
        </a>
        <a href="https://linkedin.com/in/aryanbaburajan" target="_blank">
          Linkedin
        </a>
        <a href="https://aryanbaburajan.itch.io/" target="_blank">
          Itch.io
        </a>
      </div>

      <h3>What I'm working on</h3>
      <ul>
        <li>
          Performance engineering intern at{" "}
          <a href="https://frappe.io" target="_blank">
            Frappe
          </a>{" "}
          (2026–present)
        </li>
        <li>Finding ways to solve people’s problems through software.</li>
      </ul>

      <h3>Highlights</h3>
      <ul>
        <li>
          <span className="block sm:float-right text-sm sm:text-base mt-1 sm:mt-0 mb-1 sm:mb-0 opacity-80 sm:opacity-100">
            [<a href="https://www.youtube.com/watch?v=TGBrZrPsNwQ">youtube</a>]
            [<a href="https://github.com/aryanbaburajan/ducktape">github</a>]
          </span>
          <b>Ducktape Game Engine</b>: 3D game engine written in C++ using
          OpenGL, EnTT, and Dear ImGui. Features rendering system, scene
          serialization, editor tooling, and native C++ DLL scripting. Built a
          community and hosted multiple hackathons around it.
        </li>
        <li>
          <span className="block sm:float-right text-sm sm:text-base mt-1 sm:mt-0 mb-1 sm:mb-0 opacity-80 sm:opacity-100">
            [
            <a href="https://github.com/SerenityOS/serenity/pulls?q=is%3Apr+author%3Aaryanbaburajan">
              github
            </a>
            ]
          </span>
          <b>Contributed to SerenityOS</b>: Improving support for Unicode
          character encoding from ASCII and porting various native applications
          to their new GUI markup language.
        </li>
        <li>
          <span className="block sm:float-right text-sm sm:text-base mt-1 sm:mt-0 mb-1 sm:mb-0 opacity-80 sm:opacity-100">
            [<a href="https://www.youtube.com/watch?v=m9-Aq3A2LyY">youtube</a>]
          </span>
          <b>Delivered a talk at KochiFOSS</b>: to a 100+ member college
          audience as the youngest student there from highschool sharing my
          experience in building a game engine from scratch.
        </li>
        <li>
          <b>TinkerPlay</b>: Held a workshop on the basics of Game Development
          to a room of first and second years using p5.js. Super proud about
          having taught them the joy of reading documentation, coding, and
          experimenting in their projects.
        </li>
      </ul>

      <h3>Side Projects</h3>
      <ul>
        <li>
          <span className="block sm:float-right text-sm sm:text-base mt-1 sm:mt-0 mb-1 sm:mb-0 opacity-80 sm:opacity-100">
            [<a href="https://github.com/aryanbaburajan/mirage">github</a>]
          </span>
          <b>Mirage</b> — A personalized version of ProductHunt.com that caters
          to the user’s interests with a user authenticated product dashboard
          and an email newsletter system to periodically send recommendations
          through cron jobs
        </li>

        <li>
          <span className="block sm:float-right text-sm sm:text-base mt-1 sm:mt-0 mb-1 sm:mb-0 opacity-80 sm:opacity-100">
            [<a href="https://github.com/aryanbaburajan/directshare">github</a>]
          </span>
          <b>DirectShare</b> — File sharing service
        </li>

        <li>
          <span className="block sm:float-right text-sm sm:text-base mt-1 sm:mt-0 mb-1 sm:mb-0 opacity-80 sm:opacity-100">
            [<a href="https://github.com/aryanbaburajan/godspeed">github</a>]
          </span>
          <b>Godspeed</b> — Room-based file transfer using WebSockets
          (incomplete)
        </li>

        <li>
          <span className="block sm:float-right text-sm sm:text-base mt-1 sm:mt-0 mb-1 sm:mb-0 opacity-80 sm:opacity-100">
            [<a href="https://github.com/aryanbaburajan/burrito">github</a>]
          </span>
          <b>Burrito</b> — Notion and Excalidraw combined into a Note-taking
          canvas (incomplete)
        </li>

        <li>
          <b>Video Games</b>
          <ul>
            <li>
              <span className="block sm:float-right text-sm sm:text-base mt-1 sm:mt-0 mb-1 sm:mb-0 opacity-80 sm:opacity-100">
                [
                <a href="https://aryanbaburajan.itch.io/duck-duck-golf">
                  itch.io
                </a>
                ]
              </span>
              <b>Duck Duck Golf</b> — Golf obstacle course
            </li>
            <li>
              <span className="block sm:float-right text-sm sm:text-base mt-1 sm:mt-0 mb-1 sm:mb-0 opacity-80 sm:opacity-100">
                [
                <a href="https://aryanbaburajan.itch.io/chaos-just-kinda-had-its-charm-ig">
                  itch.io
                </a>
                ]
              </span>
              <b>Chaos Car Destruction</b> — Physics-based destruction game
            </li>
            <li>
              <span className="block sm:float-right text-sm sm:text-base mt-1 sm:mt-0 mb-1 sm:mb-0 opacity-80 sm:opacity-100">
                [<a href="https://aryanbaburajan.itch.io/vroom">itch.io</a>]
              </span>
              <b>VROOM</b> — Procedurally generated track arcade racer
            </li>
            <li>
              <span className="block sm:float-right text-sm sm:text-base mt-1 sm:mt-0 mb-1 sm:mb-0 opacity-80 sm:opacity-100">
                [<a href="https://aryanbaburajan.itch.io/woosh">itch.io</a>]
              </span>
              <b>Woosh</b> — Train railway sandbox
            </li>
            <li>
              <span className="block sm:float-right text-sm sm:text-base mt-1 sm:mt-0 mb-1 sm:mb-0 opacity-80 sm:opacity-100">
                [<a href="https://aryanbaburajan.itch.io/hectagon">itch.io</a>]
              </span>
              <b>Hectagon</b> — Procedural Island Generator
            </li>
          </ul>
        </li>

        <li>
          <span className="block sm:float-right text-sm sm:text-base mt-1 sm:mt-0 mb-1 sm:mb-0 opacity-80 sm:opacity-100">
            [<a href="https://keam-mark-calculator.vercel.app">website</a>] [
            <a href="https://github.com/aryanbaburajan/keam-mark-calculator">
              github
            </a>
            ]
          </span>
          <b>KEAM Mark Calculator</b> — Mark calculation for KEAM
        </li>

        <li>
          <span className="block sm:float-right text-sm sm:text-base mt-1 sm:mt-0 mb-1 sm:mb-0 opacity-80 sm:opacity-100">
            [<a href="https://github.com/aryanbaburajan/hotfix">github</a>]
          </span>
          <b>Hotfix Chrome Extension</b> — Fixes quirks on the internet
        </li>

        <li>
          <span className="block sm:float-right text-sm sm:text-base mt-1 sm:mt-0 mb-1 sm:mb-0 opacity-80 sm:opacity-100">
            [<a href="https://github.com/aryanbaburajan/robot">github</a>]
          </span>
          <b>Robot</b> — Web crawler
        </li>

        <li>
          <span className="block sm:float-right text-sm sm:text-base mt-1 sm:mt-0 mb-1 sm:mb-0 opacity-80 sm:opacity-100">
            [<a href="https://github.com/aryanbaburajan/plaintext">github</a>]
          </span>
          <b>Plaintext</b> — Minimalist text-only browser
        </li>

        <li>
          <span className="block sm:float-right text-sm sm:text-base mt-1 sm:mt-0 mb-1 sm:mb-0 opacity-80 sm:opacity-100">
            [<a href="https://github.com/aryanbaburajan/regina">github</a>]
          </span>
          <b>Regina</b> — Brainfuck Interpreter using regex operations
        </li>

        <li>
          <span className="block sm:float-right text-sm sm:text-base mt-1 sm:mt-0 mb-1 sm:mb-0 opacity-80 sm:opacity-100">
            [<a href="https://aryanbaburajan.github.io/dotpfp">website</a>] [
            <a href="https://github.com/aryanbaburajan/dotpfp">github</a>]
          </span>
          <b>DotPFP</b> — Half-tone image generator
        </li>

        <li>
          <span className="block sm:float-right text-sm sm:text-base mt-1 sm:mt-0 mb-1 sm:mb-0 opacity-80 sm:opacity-100">
            [<a href="https://emotify.js.org">website</a>] [
            <a href="https://github.com/aryanbaburajan/emotify">github</a>]
          </span>
          <b>Emotify</b> — JavaScript library for custom website emotes
        </li>

        <li>
          <span className="block sm:float-right text-sm sm:text-base mt-1 sm:mt-0 mb-1 sm:mb-0 opacity-80 sm:opacity-100">
            [<a href="https://lifetree.netlify.app">website</a>] [
            <a href="https://github.com/aryanbaburajan/lifetree">github</a>]
          </span>
          <b>LifeTree</b> — Life events as Git branches
        </li>
      </ul>

      <h3>Contact</h3>
      <ul>
        <li>
          Send me a DM on <a href="https://x.com/aryanbaburajan">X</a> or reach
          out via email at aryanbaburajan2007 at gmail dot com.
        </li>
      </ul>
    </main>
  );
}
