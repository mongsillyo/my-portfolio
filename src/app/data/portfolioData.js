export const portfolioData = {
  profile: {
    name: "김서희",
    imageUrl: "/ME.png", // 없을 시 방패 아이콘 사용
    tagline: "On the Path to Cloud Forensics Expertise",
    subtitle: "클라우드 인프라에서 발생하는 침해사고를 추적·분석하고, 디지털 증거를 확보할 수 있는 역량을 갖춘 보안 전문가",
    introduction: [
      "융합보안공학과에 진학한 이후, 다양한 실습 및 프로젝트를 통해 보안의 기초 이론부터 최신 기술 트렌드까지 폭넓게 습득하며 전문성을 키워가고 있습니다.",
      "클라우드 보안과 디지털 포렌식 분야에 깊은 흥미를 갖고 있으며, 두 영역을 융합해 복잡한 사이버 위협에 대응할 수 있는 통합 보안 전문가로 성장하는 것을 목표로 하고 있습니다."
    ],
    education: {
      university: "성신여자대학교",
      major: "융합보안공학과",
      status: "재학 중", // 또는 졸업년도
      gpa: "" // 선택사항
    },
    experience: [
      {
        title: "학부연구생",
        organization: "NSSEC LAB",
        period: "2025.09 - ",
        track: "클라우드",
      },{
        title: "학생회",
        organization: "제11대 융합보안공학과 학생회 l1nk",
        period: "2024.12 - ",
        track: "부학생회장",
      }
    ],
    contact: {
      email: "20231068@sungshin.ac.kr",
      github: "https://github.com/mongsillyo",
      linkedin: "",
      blog: "https://mongsillyo.tistory.com/"
    }
  },

  clubs: [
    {
      id: "club-mcpsec",
      name: "융합보안공학과 학술동아리 융보공",
      university: "성신여자대학교",
      role: "8기 총괄부 운영진",
      period: "2025.03 - 현재",
      description: "매주 보안 세미나를 통해 웹해킹, 시스템해킹, 암호학, 포렌식 네트워크 등 다양한 보안 분야를 학습하고 있습니다.",
      activities: [
        "주간 보안 기술 세미나 참여",
        "CTF 문제 해결",
        "코딩 학습",
        "동아리 내 지식 공유 및 스터디"
      ],
      achievements: [
        "",
        ""
      ]
    },

  ],

projects: [
  //{
      // id: "project-ctf-2025",
      // title: "융합보안공학 8기 CTF 문제 출제",
      // period: "2025.05 - 2025.06",
      // status: "완료",
      // thumbnail: "/projecttestimage.png",
      // images: [
        // "/gallerydefault.png",
        // "/gallerydefault.png",
        // "/gallerydefault.png"
      // ],
      // overview: "동아리 기술 세미나에서 학습한 지식을 바탕으로 직접 취약점을 설계하고, 다른 부원들이 출제한 다양한 분야의 문제를 해결하며 공격과 방어의 원리를 종합적으로 학습했습니다.",
      // contribution: [
        // "'Integer Overflow' 취약점을 응용한 시스템 해킹 문제 출제",
        // "다른 팀원이 출제한 웹, 암호학 분야 문제 해결 및 Write-up 작성"
    //  ],
      // techStack: ["C", "Python", "GDB", "CTFd"],
      // links: {
        // github: [
          // { name: "CTF 문제 소스코드", url: "https://github.com/YYJ-SH/ctfd_final" },
          // { name: "Write-up 모음", url: "https://just-switch-e27.notion.site/2025-CTF-MCP-225744acd59580a79903e5da1ff24793?source=copy_link" }
        // ],
        // docs: [
          // { name: "문제 풀이 및 해설", url: "https://creamerburger.tistory.com/10" },
          // { name: "CTF 참가 후기", url: "https://creamerburger.tistory.com/11" }
        // ]
      // }
    // },
    {
      id: "project-DEV-security-study",
      title: "데브옵스 팀 스터디 프로젝트",
      period: "2025.03 - 2025.06",
      status: "완료",
      thumbnail: "/projecttestimage.png",
      // images: [
        // "/gallerydefault.png",
        // "/gallerydefault.png",
        // "/gallerydefault.png",
        // "/gallerydefault.png"
      // ],
      overview: "DevOps 스터디 팀의 일원으로 참여하여 CI/CD, 컨테이너, 인프라 자동화, 보안 통합 등을 주제로 다양한 스터디를 진행하였습니다. Jenkins, Docker, Kubernetes, Trivy, CTFd 등 도구를 활용해 개발과 운영의 통합을 배우고 클라우드 환경 보안에 대한 실질적인 역량을 강화하였습니다.",
      contribution: [
        "CI/CD: Jenkins, GitHub Actions 등으로 자동화된 배포 학습",
        "컨테이너: Docker, Docker Compose 학습 및 환경 학습",
        "오케스트레이션: Kubernetes 개념 및 클러스터 보안 학습",
        "CTF: CTFd 플랫폼 구축 및 Nginx, Docker 연동 학습"
      ],
      techStack: ["Docker", "Linux", "CTFd", "GitHub Actions"],
      links: {
        // github: [
          // { name: "웹 보안 스터디 자료", url: "https://github.com/sooa-lee/web-security-study" },
          // { name: "취약점 실습 코드", url: "https://github.com/sooa-lee/vuln-lab-codes" }
        // ],
        docs: [
          { name: "데브옵스 팀 스터디 자료", url: "https://moonsy0721.tistory.com/" },
        //  { name: "SQL Injection 분석 리포트", url: "https://creamerburger.tistory.com/72" },
        //  { name: "XSS 공격 벡터 연구", url: "https://creamerburger.tistory.com/72" }
        ]
      }
    },
    {
      id: "project-security-study",
      title: "재단법인 미래와소프트웨어 제5회 아이디어 공모전",
      period: "2025.01 - 2025.03",
      status: "완료",
      thumbnail: "/projecttestimage.png",
      images: [
        // "/gallerydefault.png",
        // "/gallerydefault.png",
        // "/gallerydefault.png",
        // "/gallerydefault.png"
       ],
      overview: "팀 Mail Jam의 일원으로, PDF 첨부파일을 이용한 이메일 피싱 공격을 방어하는 자동화 보안 시스템 개발에 참여했습니다. Gmail API와 Google OAuth, PDF 분석 도구 등을 활용해, 메일 연동과 악성 파일 탐지, 위험도 분석 대시보드 구현 등 실제 현업 보안 수요에 맞춘 프로젝트를 경험했습니다",
      contribution: [
        //  "CI/CD: Jenkins, GitHub Actions 등으로 자동화된 배포 학습",
        //  "컨테이너: Docker, Docker Compose 학습 및 환경 학습",
        //  "오케스트레이션: Kubernetes 개념 및 클러스터 보안 학습",
        //  "CTF: CTFd 플랫폼 구축 및 Nginx, Docker 연동 학습"
       ],
      techStack: [],
      links: {
        // github: [
          // { name: "웹 보안 스터디 자료", url: "https://github.com/sooa-lee/web-security-study" },
          // { name: "취약점 실습 코드", url: "https://github.com/sooa-lee/vuln-lab-codes" }
        // ],
        docs: [
          { name: "공모전 최종 보고서", url: "https://mongsillyo.tistory.com/3" },
        //  { name: "SQL Injection 분석 리포트", url: "https://creamerburger.tistory.com/72" },
        //  { name: "XSS 공격 벡터 연구", url: "https://creamerburger.tistory.com/72" }
        ]
      }
    }
  ],
  
  learningActivities: [
    {
      id: "learn-fuzzing",
      title: "AFL Fuzzing을 통한 자동화된 취약점 탐지 실습",
      organization: "융합보안공학과 학술동아리 융보공",
      period: "2025.05.09",
      instructor: "융보공 기획부",
      description: "AFL 퍼징 실습을 통해 메모리 취약점을 자동으로 탐지하고, 다양한 보안 결함(버퍼 오버플로우, 유즈 애프터 프리 등)의 발생 원리와 대응 필요성을 체감했습니다.",
      materials: [
     //   { name: "세미나 자료", url: "/NINE.pdf" },
        { name: "실습 기록", url: "https://mongsillyo.tistory.com/1" }
      ]
    },
    {
      id: "learn-llm",
      title: "네이버 클라우드에 CTFD 플랫폼 올리기 ",
      organization: "융합보안공학과 학술동아리 융보공",
      period: "2025.05.23",
      instructor: "융보공 기획부",
      description: "Naver Cloud와 Docker 기반 환경에서 CTFd 플랫폼을 구축하며 클라우드 인프라 구성 및 보안 환경 설정을 실습했습니다.",
      materials: [
        // { name: "세미나 자료", url: "/NINE.pdf" },
        { name: "실습 기록", url: "https://mongsillyo.tistory.com/2" }
      ]
    },
    {
      // id: "learn-network",
      // title: "네트워크 패킷 분석 (Wireshark)",
      // organization: "융합보안공학과 학술동아리 융보공",
      // period: "2024.11",
      // instructor: "융보공 기획부",
      // description: "Wireshark를 활용해 TCP 3-Way Handshake, ARP 등 주요 프로토콜의 동작 원리를 패킷 레벨에서 분석했습니다.",
      // materials: [
        // { name: "세미나 자료", url: "/wireshark.pdf" },
        // { name: "패킷 분석 리포트", url: "https://creamerburger.tistory.com/72" }
      // ]
    }
  ],
  
  awards: [
    // {
    //   id: "award-mcp-ctf-2025",
    //   title: "2025 제 2회 융보공 MCP CTF 장려상",
    //   organizer: "융합보안공학과",
    //   date: "2025. 06.",
    //   description: "시스템 해킹 분야 문제 출제 및 종합 점수를 바탕으로 장려상을 수상했습니다.",
    //   proofImage: "/K-Shield.pdf"
    // },
    // {
    //   id: "award-creative-2024",
    //   title: "2024 창의융합경진대회 우수상",
    //   organizer: "성신여자대학교",
    //   date: "2024. 12.",
    //   description: "LLM 보안 교육 서비스 아이디어로 우수상을 수상했습니다.",
    //   proofImage: "/defaultimage.png"
    // }
   ],

  certificates: [
    {
      id: "k-shield",
      name: "k-shield 주니어 기초 교육 수료",
      organizer: "한국인터넷진흥원(KISA)",
      date: "2025. 06 - 07",
      certificateImage: "/k-shield.png"
    },
    {
      id: "kisia iot",
      name: "kisia ICT융합산업보안 인력양성사업 스마트 홈가전 보안 분야",
      organizer: "한국정보보호산업협회",
      date: "2025. 07 ",
      certificateImage: "/kisia iot.png"
    },
    {
      id: "cert-mcpsec-8th",
      name: "융합보안공학과 학술동아리 융보공 8기 수료증",
      organizer: "성신여자대학교 융합보안공학과",
      date: "2025. 0７.",
      certificateImage: ""
    },
    {
      id: "cert-ctf-pizza",
      name: "제 2회 융보공 CTF&PIZZA 수료증",
      organizer: "융합보안공학과 학술동아리 융보공",
      date: "2025. 06.",
      certificateImage: "/ctf-ybs-2image.png"
    }
  ],

  externalActivities: [
    {
      id: "activity-secon-2025",
      name: "제23회 세계보안엑스포 (SECON & eGISEC)",
      role: "참가자 (Attendee)",
      date: "2025. 03. 21.",
      description: "글로벌 보안 기업들의 부스를 탐방하며 AI 보안 및 클라우드 보안 분야의 최신 기술 동향을 분석하고, 각종 보안 솔루션의 동작 메커니즘과 적용 사례를 심도 있게 이해하는 기회를 가졌습니다.",
      activityImage: "/defaultimage.png"
    }
    // {
      // id: "activity-codegate-2024",
    //  name: "CODEGATE 2024 청소년 부문",
      // role: "참가자",
      // date: "2024. 08.",
      // description: "국내 최대 규모의 해킹 컨테스트에 참가하여 실제 보안 전문가들과 경쟁하며 실력을 검증받는 기회를 가졌습니다.",
      // activityImage: "/defaultimage.png"
    // },
    // {
      // id: "activity-kisa-seminar-2024",
      // name: "KISA 사이버보안 세미나 2024",
      // role: "참가자",
      // date: "2024. 11.",
      // description: "한국인터넷진흥원(KISA)에서 주최한 사이버보안 세미나에 참가하여 국가 차원의 보안 정책과 최신 위협 동향에 대해 학습했습니다.",
      // activityImage: "/defaultimage.png"
    // }
  ],
  
  skills: {
    // "언어": [
      // { name: "Python", description: "CTF Exploit 코드, 자동화 스크립트 작성" },
      // { name: "C", description: "시스템 취약점 분석 및 구현" },
      // { name: "JavaScript", description: "Next.js를 이용한 웹 개발" }
    // ],
    // "보안 도구": [
      // { name: "AFL", description: "퍼징을 통한 취약점 자동 탐색" },
      // { name: "Wireshark", description: "패킷 캡처 및 프로토콜 분석" },
      // { name: "Burp Suite", description: "웹 취약점 분석" }
    // ],
    // "기타": [
      // { name: "Docker", description: "컨테이너 기반 환경 이해" },
      // { name: "Git & GitHub", description: "버전 관리 및 협업" },
      // { name: "Linux", description: "CLI 환경 서버 관리" }
    // ]
  },
  
  blogPosts: [
  //   {
  //     id: "post-1",
  //     title: "CTF 'Integer Overflow' 문제 풀이 (Write-up)",
  //     thumbnail: "/blogtestimage.png",
  //     description: "제가 직접 출제한 문제의 기획 의도와 상세한 풀이 과정입니다.",
  //     url: "https://creamerburger.tistory.com/10",
  //     date: "2025. 06. 15.",
  //     tags: ["CTF", "System Hacking", "Write-up"]
  //   },
  //   {
  //     id: "post-2",
  //     title: "SQL Injection 취약점 심층 분석: Union-based 공격부터 Blind 기법까지",
  //     thumbnail: "/blogtestimage.png",
  //     description: "OWASP Top 10에 포함된 SQL Injection 취약점의 다양한 공격 기법과 실제 익스플로잇 사례를 분석합니다.",
  //     url: "https://creamerburger.tistory.com/82",
  //     date: "2024. 11. 28.",
  //     tags: ["Web Security", "SQL Injection", "OWASP"]
  //   },
  //   {
  //     id: "post-3",
  //     title: "AFL 퍼징으로 취약점 찾기: 실전 경험 공유",
  //     thumbnail: "/blogtestimage.png",
  //     description: "AFL을 사용한 퍼징 실습 과정과 발견한 취약점들을 정리했습니다.",
  //     url: "https://creamerburger.tistory.com/fuzzing-experience",
  //     date: "2024. 11. 20.",
  //     tags: ["Fuzzing", "AFL", "Vulnerability"]
  //   },
  //   {
  //     id: "post-4",
  //     title: "XSS 공격 벡터 연구: Stored XSS에서 DOM XSS까지",
  //     thumbnail: "/blogtestimage.png",
  //     description: "웹 보안 스터디에서 진행한 XSS 취약점 연구와 다양한 공격 시나리오를 소개합니다.",
  //     url: "https://creamerburger.tistory.com/xss-research",
  //     date: "2024. 10. 15.",
  //     tags: ["Web Security", "XSS", "DOM Manipulation"]
  //   },
  //   {
  //     id: "post-5",
  //     title: "LLM 보안 위협과 프롬프트 인젝션 공격 분석",
  //     thumbnail: "/blogtestimage.png",
  //     description: "PortSwigger 실습을 통해 배운 LLM 보안 위협과 대응 방안을 다룹니다.",
  //     url: "https://creamerburger.tistory.com/82",
  //     date: "2024. 10. 28.",
  //     tags: ["LLM", "AI Security", "Prompt Injection"]
  //   },
  //   {
  //     id: "post-6",
  //     title: "Wireshark로 네트워크 패킷 분석 마스터하기",
  //     thumbnail: "/blogtestimage.png",
  //     description: "네트워크 프로토콜 분석과 Wireshark 사용법을 실습 예시와 함께 설명합니다.",
  //     url: "https://creamerburger.tistory.com/wireshark-analysis",
  //     date: "2024. 11. 05.",
  //     tags: ["Network", "Wireshark", "Protocol Analysis"]
  //   }
  ]
};
