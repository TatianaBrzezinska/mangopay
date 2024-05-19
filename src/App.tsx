import Providers from "@/context/Providers";
import AppRouter from "@/routing/AppRouter";

const App: React.FC = () => {
  return (
    <Providers>
      <AppRouter />
    </Providers>
  );
};

export default App;
