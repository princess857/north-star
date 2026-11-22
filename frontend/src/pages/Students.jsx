import { useMemo, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { ArrowLeft, ArrowRight, Check, ChevronDown, FileImage, GraduationCap, Plus, Search, UserRound, X } from 'lucide-react'
import DataTable from '../components/DataTable'
import EmptyState from '../components/EmptyState'
import PageHeader from '../components/PageHeader'
import { Avatar, Button } from '../components/ui/primitives'
import { useSchool } from '../context/useSchool'

const blankStudent = { name: '', email: '', grade: 'Grade 6', className: '6A · Cedar', status: 'Active', attendance: 100, joined: new Date().toISOString().slice(0, 10), avatar: '', guardian: '', phone: '' }
const pageSize = 8

function StudentForm({ open, onOpenChange, student, onSave }) {
  const [form, setForm] = useState(blankStudent)
  const [errors, setErrors] = useState({})
  const [saved, setSaved] = useState(false)

  function prepareForm(nextOpen) {
    if (nextOpen) { setForm(student ? { ...student } : { ...blankStudent }); setErrors({}); setSaved(false) }
    onOpenChange(nextOpen)
  }
  function validate() {
    const next = {}
    if (!form.name.trim()) next.name = 'Enter the student’s full name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid school email address.'
    if (!form.guardian.trim()) next.guardian = 'Add a parent or guardian contact.'
    setErrors(next)
    return Object.keys(next).length === 0
  }
  function submit(event) {
    event.preventDefault()
    if (!validate()) return
    onSave({ ...form, avatar: form.avatar || `https://api.dicebear.com/9.x/notionists/svg?seed=${encodeURIComponent(form.name)}&backgroundColor=d8efea` })
    setSaved(true)
    window.setTimeout(() => prepareForm(false), 350)
  }
  function update(field, value) { setForm((current) => ({ ...current, [field]: value })) }

  return <Dialog.Root open={open} onOpenChange={prepareForm}><Dialog.Portal><Dialog.Overlay className="dialog-overlay" /><Dialog.Content className="dialog-content student-dialog"><div className="dialog-header"><div><span className="section-kicker">STUDENT RECORD</span><Dialog.Title>{student ? 'Edit student' : 'Add a student'}</Dialog.Title><Dialog.Description>Keep student details up to date for your school community.</Dialog.Description></div><Dialog.Close asChild><button className="icon-button" aria-label="Close dialog"><X size={18} /></button></Dialog.Close></div><form onSubmit={submit} noValidate><div className="upload-placeholder"><span><FileImage size={19} /></span><div><strong>Student photo</strong><small>Optional · JPG or PNG</small></div><Button variant="secondary" size="small" type="button" onClick={() => update('avatar', '')}>Use initials</Button></div><div className="form-grid"><label className="field-wrap field-full">Full name <span>*</span><input autoFocus value={form.name} onChange={(event) => update('name', event.target.value)} onBlur={validate} placeholder="e.g. Olivia Bennett" aria-invalid={Boolean(errors.name)} />{errors.name && <small className="field-error">{errors.name}</small>}</label><label className="field-wrap field-full">School email <span>*</span><input type="email" value={form.email} onChange={(event) => update('email', event.target.value)} onBlur={validate} placeholder="student@northstar.edu" aria-invalid={Boolean(errors.email)} />{errors.email && <small className="field-error">{errors.email}</small>}</label><label className="field-wrap">Grade<select value={form.grade} onChange={(event) => update('grade', event.target.value)}>{Array.from({ length: 7 }, (_, index) => `Grade ${index + 4}`).map((grade) => <option key={grade}>{grade}</option>)}</select><ChevronDown size={14} /></label><label className="field-wrap">Class<select value={form.className} onChange={(event) => update('className', event.target.value)}>{['4A · Aspen', '4B · Maple', '5A · Aspen', '5B · Maple', '6A · Cedar', '6B · Maple', '7A · Cedar', '7C · Birch', '8A · Cedar', '8B · Maple', '9A · Cedar', '9B · Maple', '10A · Cedar', '10B · Maple'].map((className) => <option key={className}>{className}</option>)}</select><ChevronDown size={14} /></label><label className="field-wrap field-full">Parent or guardian <span>*</span><input value={form.guardian} onChange={(event) => update('guardian', event.target.value)} onBlur={validate} placeholder="Full name" aria-invalid={Boolean(errors.guardian)} />{errors.guardian && <small className="field-error">{errors.guardian}</small>}</label><label className="field-wrap field-full">Guardian phone<input type="tel" value={form.phone} onChange={(event) => update('phone', event.target.value)} placeholder="(415) 555-0100" /></label></div><div className="dialog-footer"><Button variant="secondary" type="button" onClick={() => prepareForm(false)}>Cancel</Button><Button type="submit">{saved ? <><Check size={16} /> Saved</> : student ? 'Save changes' : <><Plus size={16} /> Add student</>}</Button></div></form></Dialog.Content></Dialog.Portal></Dialog.Root>
}

function StudentProfile({ student, onClose, onEdit }) {
  if (!student) return null
  return <Dialog.Root open={Boolean(student)} onOpenChange={(open) => !open && onClose()}><Dialog.Portal><Dialog.Overlay className="dialog-overlay" /><Dialog.Content className="profile-drawer"><Dialog.Close asChild><button className="icon-button drawer-close" aria-label="Close profile"><X size={18} /></button></Dialog.Close><div className="profile-cover" /><div className="profile-avatar"><Avatar src={student.avatar} name={student.name} size="xl" /></div><div className="profile-intro"><span className={`status-badge ${student.status === 'Active' ? 'status-active' : 'status-inactive'}`}><i />{student.status}</span><Dialog.Title>{student.name}</Dialog.Title><Dialog.Description>{student.email}</Dialog.Description><p>{student.className} <span>·</span> {student.grade}</p></div><div className="profile-metrics"><div><span>Attendance</span><strong>{student.attendance}%</strong></div><div><span>Enrolled</span><strong>{new Date(student.joined).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</strong></div></div><div className="profile-detail"><span>Parent or guardian</span><strong>{student.guardian || 'Not provided'}</strong></div><div className="profile-detail"><span>Contact number</span><strong>{student.phone || 'Not provided'}</strong></div><div className="profile-actions"><Button variant="secondary" onClick={() => { onClose(); onEdit(student) }}>Edit record</Button><Button onClick={onClose}>Done</Button></div></Dialog.Content></Dialog.Portal></Dialog.Root>
}

export default function Students() {
  const { students, addStudent, updateStudent, deleteStudent } = useSchool()
  const [query, setQuery] = useState('')
  const [classFilter, setClassFilter] = useState('All classes')
  const [statusFilter, setStatusFilter] = useState('All statuses')
  const [page, setPage] = useState(1)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [editing, setEditing] = useState(null)
  const [profile, setProfile] = useState(null)
  const [pendingDelete, setPendingDelete] = useState(null)
  const classes = useMemo(() => ['All classes', ...new Set(students.map((student) => student.className))], [students])
  const filtered = useMemo(() => students.filter((student) => {
    const matchesText = `${student.name} ${student.email} ${student.className}`.toLowerCase().includes(query.toLowerCase())
    return matchesText && (classFilter === 'All classes' || student.className === classFilter) && (statusFilter === 'All statuses' || student.status === statusFilter)
  }), [students, query, classFilter, statusFilter])
  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize))
  const currentPage = Math.min(page, pageCount)
  const pageStudents = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize)

  function openAdd() { setEditing(null); setDialogOpen(true) }
  function openEdit(student) { setEditing(student); setDialogOpen(true) }
  function saveStudent(student) { student.id ? updateStudent(student) : addStudent(student) }
  function clearFilters() { setQuery(''); setClassFilter('All classes'); setStatusFilter('All statuses'); setPage(1) }
  function changeFilter(setter, value) { setter(value); setPage(1) }

  return <div className="page-stack"><PageHeader eyebrow="Students" title="Students" description={`${students.length} students in your school community.`} action="Add student" actionIcon={Plus} onAction={openAdd} /><div className="student-summary-strip"><div><span className="summary-icon"><GraduationCap size={17} /></span><span><strong>{students.filter((student) => student.status === 'Active').length} active</strong><small>Currently enrolled</small></span></div><span className="summary-divider" /><div><span className="summary-icon summary-icon-amber"><UserRound size={17} /></span><span><strong>{students.filter((student) => student.status === 'Inactive').length} inactive</strong><small>Archived records</small></span></div><span className="summary-note">Student information is stored on this device.</span></div><section className="panel students-panel"><div className="student-toolbar"><div className="student-toolbar-title"><h2>All students</h2><span>{filtered.length} records</span></div><div className="student-filters"><label className="table-search"><Search size={15} /><input aria-label="Search students" placeholder="Search by name or email" value={query} onChange={(event) => changeFilter(setQuery, event.target.value)} /><kbd>/</kbd></label><label className="filter-select"><select aria-label="Filter by class" value={classFilter} onChange={(event) => changeFilter(setClassFilter, event.target.value)}>{classes.map((className) => <option key={className}>{className}</option>)}</select><ChevronDown size={14} /></label><label className="filter-select status-filter"><select aria-label="Filter by status" value={statusFilter} onChange={(event) => changeFilter(setStatusFilter, event.target.value)}>{['All statuses', 'Active', 'Inactive'].map((status) => <option key={status}>{status}</option>)}</select><ChevronDown size={14} /></label></div></div>{pageStudents.length ? <DataTable students={pageStudents} onEdit={openEdit} onDelete={setPendingDelete} onView={setProfile} /> : <EmptyState onReset={clearFilters} />}<div className="pagination"><span>Showing <strong>{filtered.length ? (currentPage - 1) * pageSize + 1 : 0}–{Math.min(currentPage * pageSize, filtered.length)}</strong> of <strong>{filtered.length}</strong></span><div><Button size="small" variant="secondary" disabled={currentPage === 1} onClick={() => setPage((value) => value - 1)}><ArrowLeft size={14} /> Previous</Button><span className="page-indicator">{currentPage} / {pageCount}</span><Button size="small" variant="secondary" disabled={currentPage === pageCount} onClick={() => setPage((value) => value + 1)}>Next <ArrowRight size={14} /></Button></div></div></section><StudentForm open={dialogOpen} onOpenChange={setDialogOpen} student={editing} onSave={saveStudent} /><StudentProfile student={profile} onClose={() => setProfile(null)} onEdit={openEdit} /><Dialog.Root open={Boolean(pendingDelete)} onOpenChange={(open) => !open && setPendingDelete(null)}><Dialog.Portal><Dialog.Overlay className="dialog-overlay" /><Dialog.Content className="dialog-content confirm-dialog"><span className="confirm-icon"><X size={18} /></span><Dialog.Title>Remove this student?</Dialog.Title><Dialog.Description>{pendingDelete?.name}’s record will be removed from this device. This action cannot be undone.</Dialog.Description><div className="dialog-footer"><Button variant="secondary" onClick={() => setPendingDelete(null)}>Keep record</Button><Button variant="danger" onClick={() => { deleteStudent(pendingDelete.id); setPendingDelete(null) }}>Remove student</Button></div></Dialog.Content></Dialog.Portal></Dialog.Root></div>
}