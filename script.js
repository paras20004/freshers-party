{\rtf1\ansi\ansicpg1252\cocoartf2820
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 let earlyCount = 50;\
\
function buyTicket(type) \{\
  if (type === "Early Bird") \{\
    if (earlyCount > 0) \{\
      earlyCount--;\
      document.getElementById("early-count").innerText = earlyCount;\
      alert("\uc0\u55356 \u57225  You selected " + type + " ticket! Fill the form to continue.");\
      window.open("https://forms.gle/your-google-form-link", "_blank");\
    \} else \{\
      alert("\uc0\u10060  Early Bird tickets are sold out. Try Phase 2!");\
    \}\
  \} else \{\
    alert("\uc0\u55356 \u57225  You selected " + type + " ticket! Fill the form to continue.");\
    window.open("https://forms.gle/your-google-form-link", "_blank");\
  \}\
\}\
}