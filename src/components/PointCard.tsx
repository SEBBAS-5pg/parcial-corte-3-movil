interface AuthFormProps {
  onSubmit: (data: {
    email: string;
    title: string;
    description: string;
    date: string;
    status: boolean;
  }) => Promise<void>;
}
const AuthForm: React.FC<AuthFormProps> = ({
  formType,

  headerText,
  buttonText,
  linkTo,
  linkText,
  onSubmit,
}) => {
  // Estados Internos
  // formulario maneja su propio estado para los campos de texto
  const [setEmail] = useState("");
  const [setPassword] = useState("");
  const [setFullName] = useState(""); 
  const [setCrateAt] = useState("")

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
 return (
    // Copiamos la UI de Tailwind que ya habíamos hecho
    <div className="flex flex-col items-center justify-center min-h-full">
      <div className="w-full max-w-md px-8 py-10 bg-white rounded-lg shadow-xl">

      <IonText>
        ${}
      </IonText>
        </div>
      </div>
    </div>
  );
};
