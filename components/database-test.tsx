"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, Database, CheckCircle, XCircle, RefreshCw, AlertTriangle } from "lucide-react"
import { testConnection } from "@/lib/database"

export function DatabaseTest() {
  const [testing, setTesting] = useState(false)
  const [result, setResult] = useState<{ success: boolean; count?: number; error?: string } | null>(null)

  const runTest = async () => {
    setTesting(true)
    setResult(null)

    try {
      const testResult = await testConnection()
      setResult(testResult)
    } catch (error) {
      setResult({
        success: false,
        error: error instanceof Error ? error.message : "Unknown error occurred",
      })
    } finally {
      setTesting(false)
    }
  }

  return (
    <Card className="w-full max-w-2xl border-2 border-dashed border-gray-300">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2 text-[#2b3761]">
          <Database className="h-6 w-6" />
          اختبار الاتصال بقاعدة البيانات
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center">
          <Button
            onClick={runTest}
            disabled={testing}
            className="bg-gradient-to-r from-[#4767a7] to-[#2b3761] text-white hover:shadow-lg"
          >
            {testing ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                جاري الاختبار...
              </>
            ) : (
              <>
                <RefreshCw className="mr-2 h-4 w-4" />
                اختبار الاتصال
              </>
            )}
          </Button>
        </div>

        {result && (
          <div className="space-y-3">
            {result.success ? (
              <Alert className="border-green-200 bg-green-50">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-800">
                  <div className="space-y-2">
                    <p className="font-semibold">✅ تم الاتصال بقاعدة البيانات بنجاح!</p>
                    <div className="flex items-center gap-2">
                      <span>عدد المشاركين الحالي:</span>
                      <Badge variant="outline" className="text-green-700 border-green-300">
                        {result.count || 0}
                      </Badge>
                    </div>
                  </div>
                </AlertDescription>
              </Alert>
            ) : (
              <Alert className="border-red-200 bg-red-50">
                <XCircle className="h-4 w-4 text-red-600" />
                <AlertDescription className="text-red-800">
                  <div className="space-y-2">
                    <p className="font-semibold">❌ فشل في الاتصال بقاعدة البيانات</p>
                    <p className="text-sm">{result.error}</p>
                  </div>
                </AlertDescription>
              </Alert>
            )}

            {!result.success && (
              <Alert className="border-yellow-200 bg-yellow-50">
                <AlertTriangle className="h-4 w-4 text-yellow-600" />
                <AlertDescription className="text-yellow-800">
                  <div className="space-y-2">
                    <p className="font-semibold">خطوات استكشاف الأخطاء:</p>
                    <ol className="text-sm space-y-1 list-decimal list-inside">
                      <li>تأكد من تشغيل خدمة Supabase</li>
                      <li>تحقق من متغيرات البيئة (SUPABASE_URL, SUPABASE_ANON_KEY)</li>
                      <li>تأكد من تنفيذ سكريبت إنشاء الجداول</li>
                      <li>تحقق من إعدادات Row Level Security</li>
                      <li>تأكد من اتصال الإنترنت</li>
                    </ol>
                  </div>
                </AlertDescription>
              </Alert>
            )}
          </div>
        )}

        {!result && !testing && (
          <Alert className="border-blue-200 bg-blue-50">
            <Database className="h-4 w-4 text-blue-600" />
            <AlertDescription className="text-blue-800">
              <p>اضغط على الزر أعلاه لاختبار الاتصال بقاعدة البيانات والتأكد من عمل النظام بشكل صحيح.</p>
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  )
}
