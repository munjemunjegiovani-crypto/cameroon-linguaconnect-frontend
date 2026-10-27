import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";
import { languages as fallbackLanguages, type Language } from "@/data/languages";
import { culture as fallbackCulture, type Culture } from "@/data/culture";
import { dashboard as fallbackDashboard, type Dashboard } from "@/data/dashboard";
import { offlineTutorReply } from "@/data/tutor";

// Each hook returns live data from the backend, and the built-in content while it loads or if the
// backend is unreachable — so pages always render fully.
const options = { retry: 1, staleTime: 5 * 60 * 1000, refetchOnWindowFocus: false } as const;

export function useLanguages(): Language[] {
  const { data } = useQuery({
    queryKey: ["languages"],
    queryFn: () => api.get<Language[]>("/api/languages"),
    ...options,
  });
  return data ?? fallbackLanguages;
}

export function useCulture(): Culture {
  const { data } = useQuery({
    queryKey: ["culture"],
    queryFn: () => api.get<Culture>("/api/culture"),
    ...options,
  });
  return data ?? fallbackCulture;
}

export function useDashboard(): Dashboard {
  const { data } = useQuery({
    queryKey: ["dashboard"],
    queryFn: () => api.get<Dashboard>("/api/dashboard"),
    ...options,
  });
  return data ?? fallbackDashboard;
}

const TYPING_DELAY_MS = 700;

export async function askTutor(message: string, language: string): Promise<string> {
  const wait = new Promise((resolve) => setTimeout(resolve, TYPING_DELAY_MS));
  try {
    const [{ reply }] = await Promise.all([
      api.post<{ reply: string }>("/api/tutor/chat", { message, language }),
      wait,
    ]);
    return reply;
  } catch {
    await wait;
    return offlineTutorReply(message, language);
  }
}
