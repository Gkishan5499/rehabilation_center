import { Phone } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919889197771"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 z-50 group flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 fill-current"
        viewBox="0 0 24 24"
      >
        <path d="M12.004 0C5.378 0 0 5.376 0 12c0 2.122.551 4.12 1.54 5.892L.034 24l6.194-1.613a11.914 11.914 0 005.776 1.487h.005c6.626 0 12-5.376 12-12 0-6.623-5.374-12-12-12zm0 21.87h-.005a9.882 9.882 0 01-5.02-1.362l-.36-.213-3.733.974.994-3.626-.235-.374A9.852 9.852 0 012.13 12c0-5.443 4.432-9.873 9.875-9.873A9.88 9.88 0 0121.88 12c0 5.44-4.435 9.87-9.876 9.87zm5.424-7.423c-.297-.148-1.761-.864-2.034-.962-.273-.099-.472-.148-.67.149-.199.297-.768.962-.942 1.16-.174.198-.348.223-.645.075-1.464-.727-2.61-1.373-3.633-2.835-.174-.247 0-.377.147-.525.134-.135.298-.346.447-.52.149-.174.199-.297.298-.495.099-.198.05-.371-.025-.52-.074-.148-.67-1.604-.918-2.193-.243-.578-.488-.5-.67-.509h-.572c-.198 0-.52.074-.793.371-.273.297-1.042 1.01-1.042 2.455 0 1.445 1.066 2.842 1.215 3.04.149.198 2.083 3.161 5.05 4.432 2.052.88 2.827.95 3.91.796 1.139-.16 3.235-1.32 3.682-2.602.446-1.282.446-2.38.312-2.602-.134-.223-.482-.347-.78-.495z" />
      </svg>
      <span className="absolute -top-10 -left-6 bg-medical-dark text-white text-xs py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md hidden scale-0 lg:scale-100 -z-10 group-hover:z-10">Chat with us</span>
    </a>
  );
}
