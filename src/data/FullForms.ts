const forms = [
  {
    title: "2D",
    fullForm: "Two-Dimensional",
  },
  {
    title: "2FA",
    fullForm: "Two-Factor Authentication",
  },
  {
    title: "2G",
    fullForm: "Second Generation",
  },
  {
    title: "3D",
    fullForm: "Three-Dimensional",
  },
  {
    title: "3G",
    fullForm: "Third Generation",
  },
  {
    title: "5G",
    fullForm: "Fifth Generation",
  },
  {
    title: "ABC",
    fullForm: "Atanasoff Berry Computer",
  },
  {
    title: "ADSL",
    fullForm: "Asymmetric Digital Subscriber Line",
  },
  {
    title: "AI",
    fullForm: "Artificial Intelligence",
  },
  {
    title: "ALGOL",
    fullForm: "Algorithmic Language",
  },
  {
    title: "ALU",
    fullForm: "Arithmetic and Logic Unit",
  },
  {
    title: "API",
    fullForm: "Application Programming Interface",
  },
  {
    title: "APT",
    fullForm: "Automatically Programmed Tooling",
  },
  {
    title: "ARP",
    fullForm: "Address Resolution Protocol",
  },
  {
    title: "ARPA",
    fullForm: "Advanced Research Projects Agency",
  },
  {
    title: "ARPANET",
    fullForm: "Advanced Research Projects Agency Network",
  },
  {
    title: "ASCC",
    fullForm: "Automatic Sequence Controlled Calculator",
  },
  {
    title: "ASCII",
    fullForm: "American Standard Code for Information Interchange",
  },
  {
    title: "ASR",
    fullForm: "Automatic Speech Recognition",
  },
  {
    title: "AT",
    fullForm: "Advanced Technology",
  },
  {
    title: "ATM",
    fullForm: "Automated Teller Machine",
  },
  {
    title: "AVG",
    fullForm: "Anti-Virus Guard",
  },
  {
    title: "B2B",
    fullForm: "Business to Business",
  },
  {
    title: "B2C",
    fullForm: "Business to Consumer",
  },
  {
    title: "BASIC",
    fullForm: "Beginners All-purpose Symbolic Instruction Code",
  },
  {
    title: "BCC",
    fullForm: "Blind Carbon Copy",
  },
  {
    title: "BCD",
    fullForm: "Binary Coded Decimal",
  },
  {
    title: "BD-ROM",
    fullForm: "Blu-ray Disc Read Only Memory",
  },
  {
    title: "BIOS",
    fullForm: "Basic Input Output System",
  },
  {
    title: "BIT",
    fullForm: "Binary Digit",
  },
  {
    title: "BIU",
    fullForm: "Bus Interface Unit",
  },
  {
    title: "BMP",
    fullForm: "Bitmap",
  },
  {
    title: "BPS",
    fullForm: "Bytes Per Second",
  },
  {
    title: "BYTE",
    fullForm: "Binary Digit Eight",
  },
  {
    title: "CAD",
    fullForm: "Computer Aided Design",
  },
  {
    title: "CAI",
    fullForm: "Computer Aided Instruction",
  },
  {
    title: "CAL",
    fullForm: "Computer Aided Learning",
  },
  {
    title: "CAM",
    fullForm: "Computer Aided Manufacturing",
  },
  {
    title: "CBT",
    fullForm: "Computer Based Training",
  },
  {
    title: "CC",
    fullForm: "Carbon Copy",
  },
  {
    title: "CDC",
    fullForm: "Control Data Corporation",
  },
  {
    title: "CDMA",
    fullForm: "Code Division Multiple Access",
  },
  {
    title: "CD-ROM",
    fullForm: "Compact Disc Read Only Memory",
  },
  {
    title: "CD-RW",
    fullForm: "Compact Disc Rewritable",
  },
  {
    title: "CISC",
    fullForm: "Complex Instruction Set Computer",
  },
  {
    title: "CMD",
    fullForm: "Command",
  },
  {
    title: "COBOL",
    fullForm: "Common Business Oriented Language",
  },
  {
    title: "CP/M",
    fullForm: "Control Program for Microcomputer",
  },
  {
    title: "CPAV",
    fullForm: "Central Point Anti-Virus",
  },
  {
    title: "CPI",
    fullForm: "Cycles Per Instruction",
  },
  {
    title: "CPU",
    fullForm: "Central Processing Unit",
  },
  {
    title: "CRT",
    fullForm: "Cathode Ray Tube",
  },
  {
    title: "CSS",
    fullForm: "Cascading Style Sheets",
  },
  {
    title: "CU",
    fullForm: "Control Unit",
  },
  {
    title: "CUI",
    fullForm: "Character User Interface",
  },
  {
    title: "DARPANET",
    fullForm: "Defence Advanced Research Projects Agency Network",
  },
  {
    title: "DAT",
    fullForm: "Digital Audio Tape",
  },
  {
    title: "DBMS",
    fullForm: "Database Management System",
  },
  {
    title: "DDL",
    fullForm: "Data Definition Language",
  },
  {
    title: "DDR",
    fullForm: "Double Data Rate",
  },
  {
    title: "DHTML",
    fullForm: "Dynamic HyperText Markup Language",
  },
  {
    title: "DML",
    fullForm: "Data Manipulation Language",
  },
  {
    title: "DNS",
    fullForm: "Domain Name System",
  },
  {
    title: "DOS",
    fullForm: "Disk Operating System",
  },
  {
    title: "DPI",
    fullForm: "Dots Per Inch",
  },
  {
    title: "DRAM",
    fullForm: "Dynamic Random Access Memory",
  },
  {
    title: "DVD",
    fullForm: "Digital Versatile Disc",
  },
  {
    title: "DVI",
    fullForm: "Digital Visual Interface",
  },
  {
    title: "DVR",
    fullForm: "Digital Video Recorder",
  },
  {
    title: "EB",
    fullForm: "Exabyte",
  },
  {
    title: "EBCDIC",
    fullForm: "Extended Binary Coded Decimal Interchange Code",
  },
  {
    title: "ECG",
    fullForm: "Electrocardiography",
  },
  {
    title: "EDGE",
    fullForm: "Enhanced Data Rates for GSM Evolution",
  },

  {
    title: "EDI",
    fullForm: "Electronic Data Interchange",
  },
  {
    title: "EDP",
    fullForm: "Electronic Data Processing",
  },
  {
    title: "EDSAC",
    fullForm: "Electronic Delay Storage Automatic Computer",
  },
  {
    title: "EDVAC",
    fullForm: "Electronic Discrete Variable Automatic Computer",
  },
  {
    title: "EEPROM",
    fullForm: "Electrically Erasable Programmable Read-Only Memory",
  },
  {
    title: "EFS",
    fullForm: "Encrypted File System",
  },
  {
    title: "EiB",
    fullForm: "Exbibyte",
  },
  {
    title: "Email",
    fullForm: "Electronic Mail",
  },
  {
    title: "ENIAC",
    fullForm: "Electronic Numerical Integrator and Calculator",
  },
  {
    title: "EPROM",
    fullForm: "Erasable Programmable Read-Only Memory",
  },
  {
    title: "ETA",
    fullForm: "Electronic Transaction Act",
  },
  {
    title: "FAT",
    fullForm: "File Allocation Table",
  },
  {
    title: "FM",
    fullForm: "Frequency Modulation",
  },
  {
    title: "FORTRAN",
    fullForm: "Formula Translation",
  },
  {
    title: "FTP",
    fullForm: "File Transfer Protocol",
  },
  {
    title: "GB",
    fullForm: "Gigabyte",
  },
  {
    title: "GBPS",
    fullForm: "Gigabytes/Gigabits Per Second",
  },
  {
    title: "GHz",
    fullForm: "Gigahertz",
  },
  {
    title: "GiB",
    fullForm: "Gibibyte",
  },
  {
    title: "GIF",
    fullForm: "Graphics Interchange Format",
  },
  {
    title: "GIGO",
    fullForm: "Garbage In Garbage Out",
  },
  {
    title: "GML",
    fullForm: "Geography Markup Language",
  },
  {
    title: "GPL",
    fullForm: "General Public License",
  },
  {
    title: "GPRS",
    fullForm: "General Packet Radio Service",
  },
  {
    title: "GSM",
    fullForm: "Global System for Mobile Communication",
  },
  {
    title: "GUI",
    fullForm: "Graphical User Interface",
  },
  {
    title: "GWBASIC",
    fullForm: "Graphics Workstation Beginners All-purpose Symbolic Instruction Code",
  },
  {
    title: "HDD",
    fullForm: "Hard Disk Drive",
  },
  {
    title: "HDMI",
    fullForm: "High Definition Multimedia Interface",
  },
  {
    title: "HLL",
    fullForm: "High Level Language",
  },
  {
    title: "HPC",
    fullForm: "Handheld Personal Computer",
  },
  {
    title: "HREF",
    fullForm: "Hypertext Reference",
  },
  {
    title: "HTML",
    fullForm: "HyperText Markup Language",
  },
  {
    title: "HTTP",
    fullForm: "HyperText Transfer Protocol",
  },
  {
    title: "HTTPS",
    fullForm: "HyperText Transfer Protocol Secure",
  },
  {
    title: "IBM",
    fullForm: "International Business Machines",
  },
  {
    title: "IC",
    fullForm: "Integrated Circuit",
  },
  {
    title: "ICT",
    fullForm: "Information and Communication Technology",
  },
  {
    title: "ICU",
    fullForm: "Intensive Care Unit",
  },
  {
    title: "IDE",
    fullForm: "Integrated Development Environment",
  },
  {
    title: "IMAP",
    fullForm: "Internet Message Access Protocol",
  },
  {
    title: "IO",
    fullForm: "Input Output",
  },
  {
    title: "IOP",
    fullForm: "Input Output Processor",
  },
  {
    title: "IP",
    fullForm: "Internet Protocol",
  },
  {
    title: "IPM",
    fullForm: "Information Processing Machine",
  },
  {
    title: "IPO",
    fullForm: "Input Process Output",
  },
  {
    title: "IPOS",
    fullForm: "Input Process Output Storage",
  },
  {
    title: "IPV4",
    fullForm: "Internet Protocol Version 4",
  },
  {
    title: "IPV6",
    fullForm: "Internet Protocol Version 6",
  },
  {
    title: "IPX",
    fullForm: "Internetwork Packet Exchange",
  },
  {
    title: "ISO",
    fullForm: "International Organization for Standardization",
  },
  {
    title: "ISP",
    fullForm: "Internet Service Provider",
  },
  {
    title: "IT",
    fullForm: "Information Technology",
  },
  {
    title: "JPEG",
    fullForm: "Joint Photographic Experts Group",
  },
  {
    title: "KAV",
    fullForm: "Kaspersky Anti-Virus",
  },
  {
    title: "KB",
    fullForm: "Kilobyte",
  },
  {
    title: "KBPS",
    fullForm: "Kilobits Per Second",
  },
  {
    title: "LAN",
    fullForm: "Local Area Network",
  },
  {
    title: "LCD",
    fullForm: "Liquid Crystal Display",
  },
  {
    title: "LED",
    fullForm: "Light Emitting Diode",
  },
  {
    title: "LLL",
    fullForm: "Low Level Language",
  },
  {
    title: "LSI",
    fullForm: "Large Scale Integration",
  },
  {
    title: "MAC",
    fullForm: "Media Access Control",
  },
  {
    title: "MAN",
    fullForm: "Metropolitan Area Network",
  },
  {
    title: "MBPS",
    fullForm: "Megabytes Per Second",
  },
  {
    title: "MBR",
    fullForm: "Master Boot Record",
  },
  {
    title: "MCP",
    fullForm: "Master Control Program",
  },
  {
    title: "MHz",
    fullForm: "Megahertz",
  },
  {
    title: "MICR",
    fullForm: "Magnetic Ink Character Recognition",
  },
  {
    title: "MIME",
    fullForm: "Multipurpose Internet Mail Extensions",
  },
  {
    title: "MIPS",
    fullForm: "Million Instructions Per Second",
  },
  {
    title: "MLL",
    fullForm: "Machine Level Language",
  },
  {
    title: "MODEM",
    fullForm: "Modulator and Demodulator",
  },
  {
    title: "MP3",
    fullForm: "MPEG Audio Layer 3",
  },
  {
    title: "MPEG",
    fullForm: "Motion Picture Experts Group",
  },
  {
    title: "MsAccess",
    fullForm: "Microsoft Access",
  },
  {
    title: "MsDOS",
    fullForm: "Microsoft Disk Operating System",
  },
  {
    title: "MsWindows",
    fullForm: "Microsoft Windows",
  },
  {
    title: "MsWord",
    fullForm: "Microsoft Word",
  },
  {
    title: "MSI",
    fullForm: "Medium Scale Integration",
  },
  {
    title: "MSIE",
    fullForm: "Microsoft Internet Explorer",
  },
  {
    title: "MU",
    fullForm: "Memory Unit",
  },
  {
    title: "NAT",
    fullForm: "Network Address Translation",
  },
  {
    title: "NAV",
    fullForm: "Norton Anti-Virus",
  },
  {
    title: "NIC",
    fullForm: "Network Interface Card",
  },
  {
    title: "NITC",
    fullForm: "National Information Technology Center",
  },
  {
    title: "NOS",
    fullForm: "Network Operating System",
  },
  {
    title: "NSFNet",
    fullForm: "National Science Foundation Network",
  },
  {
    title: "NTFS",
    fullForm: "New Technology File System",
  },
  {
    title: "NTP",
    fullForm: "Network Time Protocol",
  },
  {
    title: "OLE",
    fullForm: "Object Linking and Embedding",
  },
  {
    title: "OMR",
    fullForm: "Optical Mark Reader / Optical Mark Recognition",
  },
  {
    title: "OOP",
    fullForm: "Object-Oriented Programming",
  },
  {
    title: "OS",
    fullForm: "Operating System",
  },
  {
    title: "OSI",
    fullForm: "Open Systems Interconnection",
  },
  {
    title: "OSS",
    fullForm: "Open Source Software",
  },
  {
    title: "PAN",
    fullForm: "Personal Area Network",
  },
  {
    title: "PB",
    fullForm: "Petabyte",
  },
  {
    title: "PC",
    fullForm: "Personal Computer",
  },
  {
    title: "PCI",
    fullForm: "Peripheral Component Interconnect",
  },
  {
    title: "PDA",
    fullForm: "Personal Digital Assistant",
  },
  {
    title: "PDF",
    fullForm: "Portable Document Format",
  },
  {
    title: "PING",
    fullForm: "Packet Internet Groper",
  },
  {
    title: "PNP",
    fullForm: "Plug and Play",
  },
  {
    title: "POS",
    fullForm: "Point of Sale",
  },
  {
    title: "POST",
    fullForm: "Power-On Self-Test",
  },
  {
    title: "PPP",
    fullForm: "PowerPoint Presentation",
  },
  {
    title: "PROLOG",
    fullForm: "Programming in Logic",
  },
  {
    title: "PROM",
    fullForm: "Programmable Read-Only Memory",
  },
  {
    title: "PSU",
    fullForm: "Power Supply Unit",
  },
  {
    title: "QBASIC",
    fullForm: "Quick Beginners All-Purpose Symbolic Instruction Code",
  },
  {
    title: "RAM",
    fullForm: "Random Access Memory",
  },
  {
    title: "RDBMS",
    fullForm: "Relational Database Management System",
  },
  {
    title: "RDMA",
    fullForm: "Remote Direct Memory Access",
  },
  {
    title: "RIP",
    fullForm: "Routing Information Protocol",
  },
  {
    title: "ROM",
    fullForm: "Read-Only Memory",
  },
  {
    title: "RPM",
    fullForm: "Revolutions Per Minute",
  },
  {
    title: "SAM",
    fullForm: "Software Asset Management",
  },
  {
    title: "SATA",
    fullForm: "Serial Advanced Technology Attachment",
  },
  {
    title: "SEO",
    fullForm: "Search Engine Optimization",
  },
  {
    title: "SIM",
    fullForm: "Subscriber Identity Module",
  },
  {
    title: "SIU",
    fullForm: "Serial Interface Unit",
  },
  {
    title: "SMPS",
    fullForm: "Switch Mode Power Supply",
  },
  {
    title: "SMS",
    fullForm: "Short Message Service",
  },
  {
    title: "SMTP",
    fullForm: "Simple Mail Transfer Protocol",
  },
  {
    title: "SPX",
    fullForm: "Sequence Packet Exchange",
  },
  {
    title: "SQL",
    fullForm: "Structured Query Language",
  },
  {
    title: "SRAM",
    fullForm: "Static Random Access Memory",
  },
  {
    title: "SSD",
    fullForm: "Solid State Drive",
  },
  {
    title: "SSI",
    fullForm: "Small Scale Integration",
  },
  {
    title: "TAPI",
    fullForm: "Telephony Application Programming Interface",
  },
  {
    title: "TB",
    fullForm: "Terabyte",
  },
  {
    title: "TBPS",
    fullForm: "Terabytes Per Second",
  },
  {
    title: "TCP",
    fullForm: "Transmission Control Protocol",
  },
  {
    title: "TiB",
    fullForm: "Tebibyte",
  },
  {
    title: "TXT",
    fullForm: "Text",
  },
  {
    title: "UHF",
    fullForm: "Ultra High Frequency",
  },
  {
    title: "UI",
    fullForm: "User Interface",
  },
  {
    title: "ULSI",
    fullForm: "Ultra Large Scale Integration",
  },
  {
    title: "ULSIC",
    fullForm: "Ultra Large Scale Integrated Circuit",
  },
  {
    title: "UMTS",
    fullForm: "Universal Mobile Telecommunications System",
  },
  {
    title: "UNIVAC",
    fullForm: "Universal Automatic Computer",
  },
  {
    title: "UPS",
    fullForm: "Uninterruptible Power Supply",
  },
  {
    title: "URL",
    fullForm: "Uniform Resource Locator",
  },
  {
    title: "USB",
    fullForm: "Universal Serial Bus",
  },
  {
    title: "VAN",
    fullForm: "Value Added Network",
  },
  {
    title: "VCD",
    fullForm: "Video Compact Disc",
  },
  {
    title: "VDU",
    fullForm: "Video Display Unit",
  },
  {
    title: "VGA",
    fullForm: "Video Graphics Array",
  },
  {
    title: "VHF",
    fullForm: "Very High Frequency",
  },
  {
    title: "VIRUS",
    fullForm: "Vital Information Resources Under Siege",
  },
  {
    title: "VLSI",
    fullForm: "Very Large Scale Integration",
  },
  {
    title: "VOIP",
    fullForm: "Voice over Internet Protocol",
  },
  {
    title: "VPN",
    fullForm: "Virtual Private Network",
  },
  {
    title: "VR",
    fullForm: "Virtual Reality",
  },
  {
    title: "VRAM",
    fullForm: "Video Random Access Memory",
  },
  {
    title: "VRML",
    fullForm: "Virtual Reality Modeling Language",
  },
  {
    title: "WAN",
    fullForm: "Wide Area Network",
  },
  {
    title: "WAP",
    fullForm: "Wireless Application Protocol",
  },
  {
    title: "WiFi",
    fullForm: "Wireless Fidelity",
  },
  {
    title: "WLAN",
    fullForm: "Wireless Local Area Network",
  },
  {
    title: "WMA",
    fullForm: "Windows Media Audio",
  },
  {
    title: "WMF",
    fullForm: "Windows Metafile Format",
  },
  {
    title: "WML",
    fullForm: "Wireless Markup Language",
  },
  {
    title: "WMV",
    fullForm: "Windows Media Video",
  },
  {
    title: "WORM",
    fullForm: "Write Once Read Many",
  },
  {
    title: "WWW",
    fullForm: "World Wide Web",
  },
  {
    title: "XHTML",
    fullForm: "Extensible HyperText Markup Language",
  },
  {
    title: "XML",
    fullForm: "Extensible Markup Language",
  },
  {
    title: "XMS",
    fullForm: "Extended Memory Specification",
  },
  {
    title: "XT",
    fullForm: "Extended Technology",
  },
  {
    title: "YB",
    fullForm: "Yottabyte",
  },
  {
    title: "YiB",
    fullForm: "Yobibyte",
  },
  {
    title: "ZB",
    fullForm: "Zettabyte",
  },
  {
    title: "ZiB",
    fullForm: "Zebibyte",
  },
];

export default forms;
