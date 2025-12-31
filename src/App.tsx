import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LetterPartOne from "./pages/LetterPartOne";
import LetterPartTwo from "./pages/LetterPartTwo";
import LetterPartThree from "./pages/LetterPartThree";
import ClosingPage from "./pages/ClosingPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/letter/1" element={<LetterPartOne />} />
          <Route path="/letter/2" element={<LetterPartTwo />} />
          <Route path="/letter/3" element={<LetterPartThree />} />
          <Route path="/closing" element={<ClosingPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
