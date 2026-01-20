import { Phone, Mail, Award, Clock } from "lucide-react";

export function TopBar() {
    return (
        <div className="bg-[#29258f] text-white py-1.5 md:py-2 text-[11px] md:text-xs tracking-wide font-medium relative z-[60] shadow-sm">
            <div className="container-cgg flex flex-col sm:flex-row items-center justify-between gap-2">
                {/* Left Side: Contact */}
                <div className="flex items-center gap-6 md:gap-8">
                    <a
                        href="tel:66045142"
                        className="flex items-center gap-2 hover:text-[#ef9019] transition-colors group"
                    >
                        <Phone className="h-4 w-4 text-[#ef9019] group-hover:scale-110 transition-transform" />
                        <span className="opacity-90 group-hover:opacity-100">+965 66045142</span>
                    </a>
                    <a
                        href="mailto:info@cggkwt.com"
                        className="flex items-center gap-2 hover:text-[#ef9019] transition-colors group"
                    >
                        <Mail className="h-4 w-4 text-[#ef9019] group-hover:scale-110 transition-transform" />
                        <span className="opacity-90 group-hover:opacity-100">info@cggkwt.com</span>
                    </a>
                </div>

                {/* Right Side: Info */}
                <div className="flex items-center gap-6 md:gap-8">
                    <div className="flex items-center gap-2 group cursor-default">
                        <Award className="h-4 w-4 text-[#ef9019]" />
                        <span className="opacity-90">Quality | Trust | Excellence</span>
                    </div>
                    <div className="hidden sm:flex items-center gap-2 border-l border-white/10 pl-6 h-4 group cursor-default">
                        <Clock className="h-4 w-4 text-[#ef9019]" />
                        <span className="opacity-90">Est. 2007</span>
                    </div>
                </div>
            </div>

            {/* Brand Anchor Line */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#ef9019]" />
        </div>
    );
}
