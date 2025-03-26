import fs from "fs";
import latex from "node-latex";

// Load the data
const data = JSON.parse(
  fs.readFileSync(new URL("./AzizBaatout.json", import.meta.url))
);

const formatDate = (date) => {
  if (!date) return "Present";
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
};

const resume = String.raw`
%-------------------------
% Resume in Latex
% Author : Jake Gutierrez
% Based off of: https://github.com/sb2nov/resume
% License : MIT
%------------------------


\documentclass[letterpaper,11pt]{article}

\usepackage{latexsym}
\usepackage[empty]{fullpage}
\usepackage{titlesec}
\usepackage{marvosym}
\usepackage[usenames,dvipsnames]{color}
\usepackage{verbatim}
\usepackage{enumitem}
\usepackage[hidelinks]{hyperref}
\usepackage{fancyhdr}
\usepackage[english]{babel}
\usepackage{tabularx}
\input{glyphtounicode}

\hypersetup{
  pdftitle={Aziz Baatout - Resume},
  pdfauthor={Aziz Baatout},
  pdfsubject={Resume – Aziz Baatout | AI, Cloud, Automation & Software Development},
  pdfkeywords={Aziz Baatout, Aziz, Baatout, Resume, Software Developer, AI, Automation}
}

%----------FONT OPTIONS----------
% sans-serif
% \usepackage[sfdefault]{FiraSans}
% \usepackage[sfdefault]{roboto}
% \usepackage[sfdefault]{noto-sans}
% \usepackage[default]{sourcesanspro}

% serif
% \usepackage{CormorantGaramond}
% \usepackage{charter}


\pagestyle{fancy}
\fancyhf{} % clear all header and footer fields
\fancyfoot{}
\renewcommand{\headrulewidth}{0pt}
\renewcommand{\footrulewidth}{0pt}

% Adjust margins
\addtolength{\oddsidemargin}{-0.5in}
\addtolength{\evensidemargin}{-0.5in}
\addtolength{\textwidth}{1in}
\addtolength{\topmargin}{-.5in}
\addtolength{\textheight}{1.0in}

\urlstyle{same}

\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Sections formatting
\titleformat{\section}{
  \vspace{-4pt}\scshape\raggedright\large
}{}{0em}{}[\color{black}\titlerule \vspace{-5pt}]

% Ensure that generate pdf is machine readable/ATS parsable
\pdfgentounicode=1

%-------------------------
% Custom commands
\newcommand{\resumeItem}[1]{
  \item\small{
    {#1 \vspace{-2pt}}
  }
}

\newcommand{\resumeSubheading}[4]{
  \vspace{-2pt}\item
    \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
      \textbf{#1} & #2 \\
      \textit{\small#3} & \textit{\small #4} \\
    \end{tabular*}\vspace{-10pt}
}

\newcommand{\resumeSubSubheading}[2]{
    \item
    \begin{tabular*}{0.97\textwidth}{l@{\extracolsep{\fill}}r}
      \textit{\small#1} & \textit{\small #2} \\
    \end{tabular*}\vspace{-7pt}
}

\newcommand{\resumeProjectHeading}[2]{
    \item
    \begin{tabular*}{0.97\textwidth}{l@{\extracolsep{\fill}}r}
      \small#1 & #2 \\
    \end{tabular*}\vspace{-10pt}
}

\newcommand{\resumeSubItem}[1]{\resumeItem{#1}\vspace{-4pt}}

\renewcommand\labelitemii{$\vcenter{\hbox{\tiny$\bullet$}}$}

\newcommand{\resumeSubHeadingListStart}{\begin{itemize}[leftmargin=0.05in, label={}]\vspace{3pt}}
\newcommand{\resumeSubHeadingListEnd}{\end{itemize}}
\newcommand{\resumeItemListStart}{\begin{itemize}\vspace{3pt}}
\newcommand{\resumeItemListEnd}{\end{itemize}\vspace{0pt}}

%-------------------------------------------
%%%%%%  RESUME STARTS HERE  %%%%%%%%%%%%%%%%%%%%%%%%%%%%


\begin{document}
% Sections formatting with added vertical padding
\titleformat{\section}{
  \vspace{-5pt}\scshape\raggedright\large % Space before the section title
}{}{0em}{}[\color{black}\titlerule \vspace{-5pt}] % Space after the section title


%----------HEADING----------
\begin{center}
    \textbf{\Huge \scshape ${data.name}} \\ \vspace{1pt}
    \small ${data.title} \\ \vspace{2pt}
    \small ${data.phone} $|$ 
    ${data.links
      .map(
        (link) =>
          `\\href{${link.url}}{\\underline{${link.url
            .replace("https://", "")
            .replace("mailto:", "")}}}`
      )
      .join(
        " $|$ "
      )} $|$ \href{https://azizbaatout.com}{\underline{azizbaatout.com}}
\end{center}


%-----------EDUCATION-----------
\section{Education}
  \resumeSubHeadingListStart
  ${data.education
    .map(
      (e) =>
        String.raw`\resumeSubheading
      {${e.school}}{${e.location}}
      {${e.degree}}{${formatDate(e.startDate)} -- ${formatDate(e.endDate)}}`
    )
    .join("\n\\vspace{5pt}\n")}
  \resumeSubHeadingListEnd

\vspace{5pt}

%-----------EXPERIENCE-----------
\section{Experience}
  \resumeSubHeadingListStart
  ${data.experiences
    .map(
      (e) =>
        String.raw`\resumeSubheading
      {${e.title}}{${e.location}}
      {\textbf{${e.company + ", " + e.jobType}}}{${formatDate(
          e.startDate
        )} -- ${formatDate(e.endDate)}}
      \resumeItemListStart
        ${e.bulletPoints
          .map((e) => String.raw`\resumeItem{${e.replace("%", "\\%")}}`)
          .join("\n")}
      \resumeItemListEnd`
    )
    .join("\n")}
  \resumeSubHeadingListEnd


%-----------PERSONAL PROJECTS-----------
\section{Personal Projects}
    \resumeSubHeadingListStart
    ${data.projects
      .filter((e) => e.showOnResume)
      .map(
        (e) =>
          String.raw`\resumeProjectHeading
        {\href{${e.link}}{\textbf{${e.title}}} $|$ \emph{${e.technologies.join(
            ", "
          )}}}{}
        \resumeItemListStart 
        \resumeItem{${e.description}}
    \resumeItemListEnd`
      )}
    \resumeSubHeadingListEnd

%-----------CERTIFICATIONS-----------
\section{Certifications}
\resumeSubHeadingListStart
${data.certifications.map(
  (e) => String.raw`\item {
    \href{${e.url}}{\textbf{${e.name}}}
    }`
)}
   
\resumeSubHeadingListEnd


%-----------LANGUAGES-----------
\section{Languages}
  \resumeSubHeadingListStart
    \item {
      \small{
        \textbf{${data.languages
          .map((l) => `${l.name} (${l.level})`)
          .join(", ")}}
      }
    }
  \resumeSubHeadingListEnd

  
%-----------TECHNICAL SKILLS-----------
\section{Technical Skills}
  \resumeSubHeadingListStart
    \item{ \small{ \textbf{${data.techstack
      .map((e) => String.raw`${e.name}`)
      .join(", ")}}
    }}
  \resumeSubHeadingListEnd


%-------------------------------------------
\end{document}

`;

const pdfFilePath = "public/aziz-baatout-resume.pdf";

const output = fs.createWriteStream(pdfFilePath);

const pdf = latex(resume);
pdf.pipe(output);

pdf.on("error", (err) => {
  console.error("LaTeX Compilation Error:", err);
  throw new Error("PDF generation failed due to LaTeX compilation error.");
});

pdf.on("finish", () => {
  console.log("✅ PDF successfully generated at", pdfFilePath);
});
