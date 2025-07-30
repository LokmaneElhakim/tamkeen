// Mock data for Tamkeen dashboard

// Enhanced workshop sessions for Tamkeen (8 days of training)
export const entrepreneurshipSessions = [
  "تحديات ريادة الأعمال في الجزائر",
  "الأسس القانونية والإدارية للمشاريع",
  "دراسة السوق والتحقق من الأفكار",
  "بناء نموذج أولي MVP",
  "النماذج الاقتصادية والتمويل في الجزائر",
  "التسويق واكتساب العملاء",
  "مهارات القيادة وإدارة الفريق",
  "حفل الختام وإطلاق تحدي المشكلات المحلية",
];

export const employmentSessions = [
  "فهم سوق العمل في الجزائر ومتطلبات الشركات",
  "إعداد السيرة الذاتية باحترافية",
  "بناء الهوية الرقمية والتواجد المهني",
  "مهارات شخصية أساسية",
  "ورشات مهنية حسب القطاعات",
  "ورشات تطبيقية أو جلسات مفتوحة",
  "ورشة المهارات الناعمة المشتركة",
  "حفل الختام وإطلاق تحدي المشكلات المحلية",
];

// Enhanced mock data for Tamkeen with attendance tracking
export const mockParticipants = [
  {
    id: 1,
    name: "Ahmed Benali",
    email: "ahmed@email.com",
    phone: "+213555123456",
    age: 22,
    track: "Entrepreneurship & Startups",
    attendedSessions: [0, 1, 3, 4, 5, 6, 7],
    qrCode: "TMK001",
    group: "Group A",
    notes: "Highly motivated participant",
    contact: "ahmed@email.com",
    initialGroup: "Group A",
  },
  {
    id: 2,
    name: "Fatima Khelil",
    email: "fatima@email.com",
    phone: "+213555234567",
    age: 20,
    track: "Employment & Job Readiness",
    attendedSessions: [0, 1, 2, 3, 4, 5],
    qrCode: "TMK002",
    group: "Group B",
    notes: "Excellent attendance record",
    contact: "fatima@email.com",
    initialGroup: "Group B",
  },
  {
    id: 3,
    name: "Youcef Mammeri",
    email: "youcef@email.com",
    phone: "+213555345678",
    age: 24,
    track: "Entrepreneurship & Startups",
    attendedSessions: [0],
    qrCode: "TMK003",
    group: "Group A",
    notes: "Needs follow-up - low attendance",
    contact: "youcef@email.com",
    initialGroup: "Group A",
  },
  {
    id: 4,
    name: "Amina Cherif",
    email: "amina@email.com",
    phone: "+213555456789",
    age: 21,
    track: "Employment & Job Readiness",
    attendedSessions: [0, 2, 4, 6],
    qrCode: "TMK004",
    group: "Group C",
    notes: "Good progress",
    contact: "amina@email.com",
    initialGroup: "Group C",
  },
];

export const mockMentors = [
  {
    id: 1,
    name: "Dr. Amina Boudiaf",
    specialty: "Entrepreneurship & Business Development",
    availability: ["Monday", "Wednesday", "Friday"],
    contact: "amina.boudiaf@tamkeen.dz",
  },
  {
    id: 2,
    name: "Karim Ben Ali",
    specialty: "Technology & Innovation",
    availability: ["Tuesday", "Thursday", "Saturday"],
    contact: "karim.benali@tamkeen.dz",
  },
  {
    id: 3,
    name: "Fatima Cherif",
    specialty: "Career Development & HR",
    availability: ["Monday", "Tuesday", "Wednesday"],
    contact: "fatima.cherif@tamkeen.dz",
  },
];

export const mockSessions = [
  {
    id: 1,
    title: "Opening Ceremony",
    date: "2025-08-22",
    startTime: "09:00",
    endTime: "10:30",
    mentorId: 1,
    groupId: "All Groups",
    topic: "Leadership",
  },
  {
    id: 2,
    title: "Entrepreneurship Fundamentals",
    date: "2025-08-23",
    startTime: "10:00",
    endTime: "12:00",
    mentorId: 1,
    groupId: "Group A",
    topic: "Public Speaking",
  },
  {
    id: 3,
    title: "Career Planning Workshop",
    date: "2025-08-23",
    startTime: "14:00",
    endTime: "16:00",
    mentorId: 3,
    groupId: "Group B",
    topic: "Project Management",
  },
  {
    id: 4,
    title: "Tech Innovation Session",
    date: "2025-08-24",
    startTime: "09:00",
    endTime: "11:00",
    mentorId: 2,
    groupId: "Group C",
    topic: "Tech Skills",
  },
];

// Mock attendance data
export const mockAttendance = [
  { id: 1, participantId: 1, date: "2025-08-22", status: "Present" },
  { id: 2, participantId: 2, date: "2025-08-22", status: "Present" },
  { id: 3, participantId: 3, date: "2025-08-22", status: "Present" },
  { id: 4, participantId: 4, date: "2025-08-22", status: "Present" },
  { id: 5, participantId: 1, date: "2025-08-23", status: "Present" },
  { id: 6, participantId: 2, date: "2025-08-23", status: "Absent" },
  { id: 7, participantId: 3, date: "2025-08-23", status: "Absent" },
  { id: 8, participantId: 4, date: "2025-08-23", status: "Present" },
  { id: 9, participantId: 1, date: "2025-08-24", status: "Present" },
  { id: 10, participantId: 2, date: "2025-08-24", status: "Present" },
  { id: 11, participantId: 3, date: "2025-08-24", status: "Absent" },
  { id: 12, participantId: 4, date: "2025-08-24", status: "Absent" },
];

export const eventConfig = {
  eventStartDate: "2025-08-22",
  eventEndDate: "2025-08-29",
  maxTotalAbsences: 2,
  groups: ["Group A", "Group B", "Group C", "Group D", "Group E"],
  topics: [
    "Public Speaking",
    "Project Management",
    "Leadership",
    "Tech Skills",
  ],
};
