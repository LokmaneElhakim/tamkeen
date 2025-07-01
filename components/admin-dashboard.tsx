"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import { Users, Building2, Download, Scan, AlertTriangle, Edit, Trash2, Search, Plus, UserCheck } from "lucide-react"

// Workshop sessions for Tamkeen (8 days of training)
const entrepreneurshipSessions = [
  "تحديات ريادة الأعمال في الجزائر",
  "الأسس القانونية والإدارية للمشاريع",
  "دراسة السوق والتحقق من الأفكار",
  "بناء نموذج أولي MVP",
  "النماذج الاقتصادية والتمويل في الجزائر",
  "التسويق واكتساب العملاء",
  "مهارات القيادة وإدارة الفريق",
  "حفل الختام وإطلاق تحدي المشكلات المحلية",
]

const employmentSessions = [
  "فهم سوق العمل في الجزائر ومتطلبات الشركات",
  "إعداد السيرة الذاتية باحترافية",
  "بناء الهوية الرقمية والتواجد المهني",
  "مهارات شخصية أساسية",
  "ورشات مهنية حسب القطاعات",
  "ورشات تطبيقية أو جلسات مفتوحة",
  "ورشة المهارات الناعمة المشتركة",
  "حفل الختام وإطلاق تحدي المشكلات المحلية",
]

// Mock data updated for Tamkeen
const mockParticipants = [
  {
    id: 1,
    name: "Ahmed Benali",
    email: "ahmed@email.com",
    phone: "+213555123456",
    age: 22,
    track: "Entrepreneurship & Startups",
    attendedSessions: [0, 1, 3],
    qrCode: "TMK001",
  },
  {
    id: 2,
    name: "Fatima Khelil",
    email: "fatima@email.com",
    phone: "+213555234567",
    age: 20,
    track: "Employment & Job Readiness",
    attendedSessions: [0, 1, 2, 3, 4],
    qrCode: "TMK002",
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
  },
]

const mockStartups = [
  {
    id: 1,
    name: "Ghardaia Tech Solutions",
    contact: "Karim Boudjema",
    email: "contact@ghardaiatech.com",
    type: "Tech Startup",
    status: "Confirmed",
  },
  {
    id: 2,
    name: "Desert Innovation Hub",
    contact: "Amina Cherif",
    email: "info@desertinnovation.dz",
    type: "Innovation Center",
    status: "Pending",
  },
]

export function AdminDashboard() {
  const [participants, setParticipants] = useState(mockParticipants)
  const [startups, setStartups] = useState(mockStartups)
  const [showScanner, setShowScanner] = useState(false)
  const [editingParticipant, setEditingParticipant] = useState<any>(null)
  const [addingParticipant, setAddingParticipant] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [newParticipant, setNewParticipant] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    track: "",
    attendedSessions: [] as number[],
  })

  const getSessionsForTrack = (track: string) => {
    return track === "Entrepreneurship & Startups" ? entrepreneurshipSessions : employmentSessions
  }

  const handleQRScan = (qrCode: string) => {
    const currentSessionIndex = 0 // This would be dynamic based on current session
    setParticipants((prev) =>
      prev.map((p) => {
        if (p.qrCode === qrCode && !p.attendedSessions.includes(currentSessionIndex)) {
          return { ...p, attendedSessions: [...p.attendedSessions, currentSessionIndex] }
        }
        return p
      }),
    )
    setShowScanner(false)
  }

  const exportToCSV = (data: any[], filename: string) => {
    const csv = [Object.keys(data[0]).join(","), ...data.map((row) => Object.values(row).join(","))].join("\n")
    const blob = new Blob([csv], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = filename
    a.click()
  }

  const handleEditParticipant = (participant: any) => {
    setEditingParticipant({ ...participant })
  }

  const handleSaveParticipant = () => {
    setParticipants((prev) => prev.map((p) => (p.id === editingParticipant.id ? editingParticipant : p)))
    setEditingParticipant(null)
  }

  const handleDeleteParticipant = (id: number) => {
    setParticipants((prev) => prev.filter((p) => p.id !== id))
  }

  const handleAddParticipant = () => {
    const id = Math.max(...participants.map((p) => p.id)) + 1
    const qrCode = `TMK${String(id).padStart(3, "0")}`
    setParticipants((prev) => [
      ...prev,
      {
        ...newParticipant,
        id,
        qrCode,
        age: Number.parseInt(newParticipant.age),
      },
    ])
    setNewParticipant({
      name: "",
      email: "",
      phone: "",
      age: "",
      track: "",
      attendedSessions: [],
    })
    setAddingParticipant(false)
  }

  const handleSessionToggle = (sessionIndex: number, participant: any, isEditing = false) => {
    if (isEditing) {
      const updatedSessions = participant.attendedSessions.includes(sessionIndex)
        ? participant.attendedSessions.filter((s: number) => s !== sessionIndex)
        : [...participant.attendedSessions, sessionIndex]

      setEditingParticipant({ ...participant, attendedSessions: updatedSessions })
    } else {
      const updatedSessions = newParticipant.attendedSessions.includes(sessionIndex)
        ? newParticipant.attendedSessions.filter((s) => s !== sessionIndex)
        : [...newParticipant.attendedSessions, sessionIndex]

      setNewParticipant({ ...newParticipant, attendedSessions: updatedSessions })
    }
  }

  const filteredParticipants = participants.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.track.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const stats = {
    totalParticipants: participants.length,
    totalStartups: startups.length,
    attendanceToday: participants.filter((p) => p.attendedSessions.length > 0).length,
    atRisk: participants.filter((p) => p.attendedSessions.length < 4).length,
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-[#2b3761] mb-2">Tamkeen Admin Dashboard</h1>
            <p className="text-gray-600">Manage participants and track Tamkeen event progress</p>
          </div>
          <div className="flex gap-3">
            <Button
              onClick={() => setAddingParticipant(true)}
              className="bg-gradient-to-r from-[#f7cd6f] to-[#eeb93c] text-[#2b3761] hover:shadow-lg transition-all duration-300"
            >
              <Plus className="mr-2 h-4 w-4" />
              Add Participant
            </Button>
            <Button
              onClick={() => setShowScanner(true)}
              className="bg-gradient-to-r from-[#4767a7] to-[#2b3761] text-white hover:shadow-lg transition-all duration-300"
            >
              <Scan className="mr-2 h-4 w-4" />
              Scan QR Code
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-[#4767a7] to-[#2b3761] text-white">
            <CardContent className="p-6">
              <div className="flex items-center">
                <Users className="h-8 w-8 text-[#f7cd6f]" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-blue-100">Total Participants</p>
                  <p className="text-3xl font-bold">{stats.totalParticipants}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-[#f7cd6f] to-[#eeb93c] text-[#2b3761]">
            <CardContent className="p-6">
              <div className="flex items-center">
                <Building2 className="h-8 w-8 text-[#2b3761]" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-[#2b3761]/70">Registered Companies</p>
                  <p className="text-3xl font-bold">{stats.totalStartups}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-green-500 to-emerald-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center">
                <UserCheck className="h-8 w-8 text-green-100" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-green-100">Active Participants</p>
                  <p className="text-3xl font-bold">{stats.attendanceToday}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-red-500 to-pink-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center">
                <AlertTriangle className="h-8 w-8 text-red-100" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-red-100">At Risk ({"<"}4 Sessions)</p>
                  <p className="text-3xl font-bold">{stats.atRisk}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Data Tables */}
        <Tabs defaultValue="participants" className="space-y-4">
          <TabsList className="bg-white shadow-lg border-0">
            <TabsTrigger
              value="participants"
              className="data-[state=active]:bg-[#4767a7] data-[state=active]:text-white"
            >
              Participants
            </TabsTrigger>
            <TabsTrigger value="companies" className="data-[state=active]:bg-[#4767a7] data-[state=active]:text-white">
              Companies
            </TabsTrigger>
          </TabsList>

          <TabsContent value="participants">
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-[#4767a7] to-[#2b3761] text-white rounded-t-lg">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl">Tamkeen Participants</CardTitle>
                    <CardDescription className="text-blue-100">
                      Manage participant registrations and track workshop attendance
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Search participants..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                      />
                    </div>
                    <Button onClick={() => exportToCSV(participants, "tamkeen-participants.csv")} variant="secondary">
                      <Download className="mr-2 h-4 w-4" />
                      Export CSV
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead className="font-semibold">Name</TableHead>
                      <TableHead className="font-semibold">Email</TableHead>
                      <TableHead className="font-semibold">Track</TableHead>
                      <TableHead className="font-semibold">Sessions Attended</TableHead>
                      <TableHead className="font-semibold">Status</TableHead>
                      <TableHead className="font-semibold">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredParticipants.map((participant) => (
                      <TableRow key={participant.id} className="hover:bg-gray-50">
                        <TableCell className="font-medium">{participant.name}</TableCell>
                        <TableCell>{participant.email}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="text-xs">
                            {participant.track}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold">{participant.attendedSessions.length}/8</span>
                            <div className="flex gap-1">
                              {Array.from({ length: 8 }).map((_, index) => (
                                <div
                                  key={index}
                                  className={`w-2 h-2 rounded-full ${
                                    participant.attendedSessions.includes(index) ? "bg-green-500" : "bg-gray-300"
                                  }`}
                                  title={`Session ${index + 1}`}
                                />
                              ))}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              participant.attendedSessions.length >= 6
                                ? "default"
                                : participant.attendedSessions.length >= 4
                                  ? "secondary"
                                  : "destructive"
                            }
                          >
                            {participant.attendedSessions.length >= 6
                              ? "Excellent"
                              : participant.attendedSessions.length >= 4
                                ? "Good"
                                : "At Risk"}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleEditParticipant(participant)}
                              className="h-8 w-8 p-0"
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleDeleteParticipant(participant.id)}
                              className="h-8 w-8 p-0 text-red-600 hover:text-red-700"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="companies">
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-[#f7cd6f] to-[#eeb93c] text-[#2b3761] rounded-t-lg">
                <div className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl">Participating Companies</CardTitle>
                    <CardDescription className="text-[#2b3761]/70">
                      Companies participating in Tamkeen exhibition
                    </CardDescription>
                  </div>
                  <Button onClick={() => exportToCSV(startups, "tamkeen-companies.csv")} variant="secondary">
                    <Download className="mr-2 h-4 w-4" />
                    Export CSV
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead className="font-semibold">Company Name</TableHead>
                      <TableHead className="font-semibold">Contact Person</TableHead>
                      <TableHead className="font-semibold">Email</TableHead>
                      <TableHead className="font-semibold">Type</TableHead>
                      <TableHead className="font-semibold">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {startups.map((startup) => (
                      <TableRow key={startup.id} className="hover:bg-gray-50">
                        <TableCell className="font-medium">{startup.name}</TableCell>
                        <TableCell>{startup.contact}</TableCell>
                        <TableCell>{startup.email}</TableCell>
                        <TableCell>{startup.type}</TableCell>
                        <TableCell>
                          <Badge variant={startup.status === "Confirmed" ? "default" : "secondary"}>
                            {startup.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Add Participant Dialog */}
        {addingParticipant && (
          <Dialog open={addingParticipant} onOpenChange={setAddingParticipant}>
            <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Add New Tamkeen Participant</DialogTitle>
                <DialogDescription>
                  Enter participant information and select their track and attended sessions.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="add-name">Name *</Label>
                    <Input
                      id="add-name"
                      value={newParticipant.name}
                      onChange={(e) => setNewParticipant({ ...newParticipant, name: e.target.value })}
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="add-email">Email *</Label>
                    <Input
                      id="add-email"
                      type="email"
                      value={newParticipant.email}
                      onChange={(e) => setNewParticipant({ ...newParticipant, email: e.target.value })}
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="add-phone">Phone</Label>
                    <Input
                      id="add-phone"
                      value={newParticipant.phone}
                      onChange={(e) => setNewParticipant({ ...newParticipant, phone: e.target.value })}
                      placeholder="+213 XXX XXX XXX"
                    />
                  </div>
                  <div>
                    <Label htmlFor="add-age">Age</Label>
                    <Input
                      id="add-age"
                      type="number"
                      value={newParticipant.age}
                      onChange={(e) => setNewParticipant({ ...newParticipant, age: e.target.value })}
                      placeholder="Age"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="add-track">Track</Label>
                  <Select onValueChange={(value) => setNewParticipant({ ...newParticipant, track: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select track" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Entrepreneurship & Startups">Entrepreneurship & Startups</SelectItem>
                      <SelectItem value="Employment & Job Readiness">Employment & Job Readiness</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {newParticipant.track && (
                  <div>
                    <Label>Sessions Attended</Label>
                    <div className="grid grid-cols-1 gap-3 mt-2 max-h-48 overflow-y-auto border rounded-lg p-4">
                      {getSessionsForTrack(newParticipant.track).map((session, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <Checkbox
                            id={`session-${index}`}
                            checked={newParticipant.attendedSessions.includes(index)}
                            onCheckedChange={() => handleSessionToggle(index, newParticipant)}
                          />
                          <Label
                            htmlFor={`session-${index}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            <span className="font-semibold text-[#4767a7]">Day {index + 1}:</span> {session}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setAddingParticipant(false)}>
                  Cancel
                </Button>
                <Button
                  onClick={handleAddParticipant}
                  className="bg-[#4767a7] hover:bg-[#2b3761]"
                  disabled={!newParticipant.name || !newParticipant.email || !newParticipant.track}
                >
                  Add Participant
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        )}

        {/* Edit Participant Dialog */}
        {editingParticipant && (
          <Dialog open={!!editingParticipant} onOpenChange={() => setEditingParticipant(null)}>
            <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Edit Tamkeen Participant</DialogTitle>
                <DialogDescription>Make changes to participant information and session attendance.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="edit-name">Name</Label>
                    <Input
                      id="edit-name"
                      value={editingParticipant.name}
                      onChange={(e) => setEditingParticipant({ ...editingParticipant, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="edit-email">Email</Label>
                    <Input
                      id="edit-email"
                      value={editingParticipant.email}
                      onChange={(e) => setEditingParticipant({ ...editingParticipant, email: e.target.value })}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="edit-phone">Phone</Label>
                    <Input
                      id="edit-phone"
                      value={editingParticipant.phone}
                      onChange={(e) => setEditingParticipant({ ...editingParticipant, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="edit-age">Age</Label>
                    <Input
                      id="edit-age"
                      type="number"
                      value={editingParticipant.age}
                      onChange={(e) =>
                        setEditingParticipant({ ...editingParticipant, age: Number.parseInt(e.target.value) })
                      }
                    />
                  </div>
                </div>
                <div>
                  <Label>Track: {editingParticipant.track}</Label>
                </div>
                <div>
                  <Label>Sessions Attended</Label>
                  <div className="grid grid-cols-1 gap-3 mt-2 max-h-48 overflow-y-auto border rounded-lg p-4">
                    {getSessionsForTrack(editingParticipant.track).map((session, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Checkbox
                          id={`edit-session-${index}`}
                          checked={editingParticipant.attendedSessions.includes(index)}
                          onCheckedChange={() => handleSessionToggle(index, editingParticipant, true)}
                        />
                        <Label
                          htmlFor={`edit-session-${index}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          <span className="font-semibold text-[#4767a7]">Day {index + 1}:</span> {session}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setEditingParticipant(null)}>
                  Cancel
                </Button>
                <Button onClick={handleSaveParticipant} className="bg-[#4767a7] hover:bg-[#2b3761]">
                  Save Changes
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        )}

        {/* QR Scanner Modal */}
        {showScanner && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
              <h3 className="text-2xl font-bold text-[#2b3761] mb-6 text-center">Tamkeen QR Scanner</h3>
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8 text-center mb-6">
                <Scan className="h-16 w-16 text-[#4767a7] mx-auto mb-4" />
                <p className="text-gray-600 mb-4">QR Scanner would be implemented here using camera access</p>
                <p className="text-sm text-gray-500 mb-4">For demo: Enter QR code manually</p>
                <Input
                  type="text"
                  placeholder="Enter QR Code (e.g., TMK001)"
                  className="mb-4"
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      const target = e.target as HTMLInputElement
                      handleQRScan(target.value)
                      target.value = ""
                    }
                  }}
                />
              </div>
              <div className="flex gap-3">
                <Button onClick={() => setShowScanner(false)} variant="outline" className="flex-1">
                  Cancel
                </Button>
                <Button
                  onClick={() => handleQRScan("TMK001")}
                  className="flex-1 bg-gradient-to-r from-[#f7cd6f] to-[#eeb93c] text-[#2b3761] hover:shadow-lg"
                >
                  Demo Scan
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
