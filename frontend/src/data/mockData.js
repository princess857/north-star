const avatar = (name, background = 'd8efea') => `https://api.dicebear.com/9.x/notionists/svg?seed=${encodeURIComponent(name)}&backgroundColor=${background}`

export const initialStudents = [
  { id: 'stu-1001', name: 'Olivia Bennett', email: 'olivia.bennett@northstar.edu', grade: 'Grade 8', className: '8A · Cedar', status: 'Active', attendance: 96, joined: '2024-08-19', avatar: avatar('Olivia Bennett'), guardian: 'Grace Bennett', phone: '(415) 555-0182' },
  { id: 'stu-1002', name: 'Ethan Carter', email: 'ethan.carter@northstar.edu', grade: 'Grade 6', className: '6B · Maple', status: 'Active', attendance: 92, joined: '2024-08-19', avatar: avatar('Ethan Carter', 'e0e9fb'), guardian: 'Maya Carter', phone: '(415) 555-0134' },
  { id: 'stu-1003', name: 'Amara Johnson', email: 'amara.johnson@northstar.edu', grade: 'Grade 9', className: '9A · Cedar', status: 'Active', attendance: 98, joined: '2023-08-21', avatar: avatar('Amara Johnson', 'f7e6d5'), guardian: 'Nina Johnson', phone: '(415) 555-0127' },
  { id: 'stu-1004', name: 'Noah Williams', email: 'noah.williams@northstar.edu', grade: 'Grade 7', className: '7C · Birch', status: 'Active', attendance: 88, joined: '2024-08-19', avatar: avatar('Noah Williams', 'e7e2f5'), guardian: 'Marcus Williams', phone: '(415) 555-0161' },
  { id: 'stu-1005', name: 'Isabella Chen', email: 'isabella.chen@northstar.edu', grade: 'Grade 5', className: '5A · Aspen', status: 'Active', attendance: 95, joined: '2025-01-06', avatar: avatar('Isabella Chen', 'f4e3e1'), guardian: 'Vivian Chen', phone: '(415) 555-0148' },
  { id: 'stu-1006', name: 'Lucas Martinez', email: 'lucas.martinez@northstar.edu', grade: 'Grade 8', className: '8B · Maple', status: 'Active', attendance: 91, joined: '2024-08-19', avatar: avatar('Lucas Martinez', 'e8edda'), guardian: 'Elena Martinez', phone: '(415) 555-0115' },
  { id: 'stu-1007', name: 'Mia Thompson', email: 'mia.thompson@northstar.edu', grade: 'Grade 4', className: '4A · Aspen', status: 'Active', attendance: 99, joined: '2025-01-06', avatar: avatar('Mia Thompson', 'f7e8d1'), guardian: 'Sophie Thompson', phone: '(415) 555-0190' },
  { id: 'stu-1008', name: 'James Wilson', email: 'james.wilson@northstar.edu', grade: 'Grade 10', className: '10A · Cedar', status: 'Inactive', attendance: 74, joined: '2022-08-22', avatar: avatar('James Wilson', 'dee9ea'), guardian: 'Peter Wilson', phone: '(415) 555-0173' },
  { id: 'stu-1009', name: 'Sophia Patel', email: 'sophia.patel@northstar.edu', grade: 'Grade 6', className: '6A · Cedar', status: 'Active', attendance: 94, joined: '2024-08-19', avatar: avatar('Sophia Patel', 'f2dfeb'), guardian: 'Anika Patel', phone: '(415) 555-0104' },
  { id: 'stu-1010', name: 'Benjamin Lee', email: 'benjamin.lee@northstar.edu', grade: 'Grade 7', className: '7A · Cedar', status: 'Active', attendance: 90, joined: '2024-08-19', avatar: avatar('Benjamin Lee', 'e0e8f7'), guardian: 'Rachel Lee', phone: '(415) 555-0156' },
  { id: 'stu-1011', name: 'Ava Robinson', email: 'ava.robinson@northstar.edu', grade: 'Grade 9', className: '9B · Maple', status: 'Active', attendance: 97, joined: '2023-08-21', avatar: avatar('Ava Robinson', 'f6eadb'), guardian: 'Daniel Robinson', phone: '(415) 555-0199' },
  { id: 'stu-1012', name: 'Elijah Davis', email: 'elijah.davis@northstar.edu', grade: 'Grade 5', className: '5B · Maple', status: 'Active', attendance: 86, joined: '2025-01-06', avatar: avatar('Elijah Davis', 'e3e6dc'), guardian: 'Leah Davis', phone: '(415) 555-0164' },
  { id: 'stu-1013', name: 'Charlotte Kim', email: 'charlotte.kim@northstar.edu', grade: 'Grade 10', className: '10B · Maple', status: 'Active', attendance: 93, joined: '2022-08-22', avatar: avatar('Charlotte Kim', 'eee2f2'), guardian: 'Min Kim', phone: '(415) 555-0185' },
  { id: 'stu-1014', name: 'Mason Garcia', email: 'mason.garcia@northstar.edu', grade: 'Grade 4', className: '4B · Maple', status: 'Active', attendance: 89, joined: '2025-01-06', avatar: avatar('Mason Garcia', 'f3e5d7'), guardian: 'Rosa Garcia', phone: '(415) 555-0177' },
  { id: 'stu-1015', name: 'Harper Nguyen', email: 'harper.nguyen@northstar.edu', grade: 'Grade 8', className: '8A · Cedar', status: 'Active', attendance: 96, joined: '2024-08-19', avatar: avatar('Harper Nguyen', 'dcedea'), guardian: 'Linh Nguyen', phone: '(415) 555-0108' },
]

export const teachers = [
  { name: 'Dr. Maya Brooks', subject: 'Mathematics', department: 'STEM', rating: '4.9', students: 124, tenure: '8 years', avatar: avatar('Maya Brooks', 'f7e6d5') },
  { name: 'Oliver Reed', subject: 'English Literature', department: 'Humanities', rating: '4.8', students: 98, tenure: '6 years', avatar: avatar('Oliver Reed', 'e0e9fb') },
  { name: 'Priya Shah', subject: 'Biology', department: 'Science', rating: '5.0', students: 112, tenure: '5 years', avatar: avatar('Priya Shah', 'f2dfeb') },
  { name: 'Daniel Kim', subject: 'Visual Arts', department: 'Creative arts', rating: '4.9', students: 86, tenure: '4 years', avatar: avatar('Daniel Kim', 'e8edda') },
  { name: 'Sofia Alvarez', subject: 'World History', department: 'Humanities', rating: '4.7', students: 103, tenure: '7 years', avatar: avatar('Sofia Alvarez', 'f4e3e1') },
  { name: 'Ethan Cole', subject: 'Computer Science', department: 'STEM', rating: '4.9', students: 91, tenure: '3 years', avatar: avatar('Ethan Cole', 'e7e2f5') },
  { name: 'Nia Washington', subject: 'Physical Education', department: 'Wellbeing', rating: '4.8', students: 142, tenure: '9 years', avatar: avatar('Nia Washington', 'f7e8d1') },
  { name: 'Lucas Moreau', subject: 'French', department: 'Languages', rating: '4.8', students: 77, tenure: '5 years', avatar: avatar('Lucas Moreau', 'dee9ea') },
]

export const weeklyAttendance = [
  { day: 'Mon', value: 78 }, { day: 'Tue', value: 91 }, { day: 'Wed', value: 84 },
  { day: 'Thu', value: 96 }, { day: 'Fri', value: 88 }, { day: 'Sat', value: 24 }, { day: 'Sun', value: 12 },
]

export const events = [
  { id: 'ev-1', day: '12', month: 'NOV', title: 'Family conferences', time: '9:00 AM – 3:30 PM', kind: 'Academic', tone: 'teal' },
  { id: 'ev-2', day: '14', month: 'NOV', title: 'Science fair showcase', time: '1:30 PM · Main hall', kind: 'Community', tone: 'amber' },
  { id: 'ev-3', day: '18', month: 'NOV', title: 'Quarterly assessments', time: 'All day · Grades 6–10', kind: 'Academic', tone: 'blue' },
]

export const activity = [
  { name: 'Olivia Bennett', action: 'submitted a science project', time: '12 min ago', avatar: avatar('Olivia Bennett') },
  { name: 'Marcus Green', action: 'joined the teaching team', time: '1 hr ago', avatar: avatar('Marcus Green', 'f2dfeb') },
  { name: 'Sophia Patel', action: 'earned a reading milestone', time: '2 hrs ago', avatar: avatar('Sophia Patel', 'e0e9fb') },
]