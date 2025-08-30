import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { User, Lock } from "lucide-react"
import Image from "next/image"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-700 via-rose-800 to-slate-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        {/* Logo Section */}
        <div className="text-center">
          <div className="mx-auto w-32 h-32 rounded-full border-2 border-white/30 flex items-center justify-center mb-8">
            <Image src="/logo-white.svg" alt="Logo" width={60} height={60} className="text-white" />
          </div>
          <div className="h-px bg-white/30 w-full"></div>
        </div>

        {/* Login Form */}
        <div className="space-y-6">
          {/* Username Input */}
          <div className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              <User size={20} />
            </div>
            <Input
              type="text"
              placeholder="USERNAME"
              className="pl-12 h-12 bg-white/20 border-white/30 text-white placeholder:text-gray-300 backdrop-blur-sm"
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              <Lock size={20} />
            </div>
            <Input
              type="password"
              placeholder="••••••••"
              className="pl-12 h-12 bg-white/20 border-white/30 text-white placeholder:text-gray-300 backdrop-blur-sm"
            />
          </div>

          {/* Login Button */}
          <Button className="w-full h-12 bg-red-500 hover:bg-red-600 text-white font-semibold text-lg rounded-lg">
            LOGIN
          </Button>

          {/* Remember Me and Forgot Password */}
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                className="border-white/50 data-[state=checked]:bg-white data-[state=checked]:text-pink-500"
              />
              <label htmlFor="remember" className="text-white/80 cursor-pointer">
                Remember me
              </label>
            </div>
            <a href="#" className="text-white/60 hover:text-white/80 italic">
              Forgot your password?
            </a>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="pt-8">
          <div className="h-px bg-white/30 w-full"></div>
        </div>
      </div>
    </div>
  )
}
