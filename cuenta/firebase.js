// Configuración web del proyecto de Firebase, compartida por las páginas de
// cuenta. Estos valores no son secretos: identifican el proyecto y viajan en
// cada pedido (lo mismo que CLAVE_API_CUENTAS en src/PresupuestoElec.dpr,
// que tiene que ser la misma clave). Se copian de la consola de Firebase:
// Configuración del proyecto -> General -> Tus apps -> app web.
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBP8HSa-AwJK8wbY_rS3Rz9Uq4PlREiygs",
  authDomain: "presupuesto-elec.firebaseapp.com",
  projectId: "presupuesto-elec",
};

export const auth = getAuth(initializeApp(firebaseConfig));
// Los mails de confirmación y de contraseña salen en castellano.
auth.languageCode = "es";

export const configurado = !firebaseConfig.apiKey.includes("REEMPLAZAR");

export const URL_PLAY =
  "https://play.google.com/store/apps/details?id=com.diegoarnaudin.presupuestoelec";

// Los códigos de error de Firebase, dichos para el usuario.
export function mensajeError(e) {
  switch (e && e.code) {
    case "auth/email-already-in-use":
      return "Ya hay una cuenta con ese email. Entrá con ella desde la app.";
    case "auth/invalid-email":
      return "Ese email no parece válido.";
    case "auth/weak-password":
    case "auth/password-does-not-meet-requirements":
      return "La contraseña es muy débil: usá al menos 6 caracteres.";
    case "auth/invalid-credential":
    case "auth/invalid-login-credentials":
    case "auth/wrong-password":
    case "auth/user-not-found":
      return "El email o la contraseña no son correctos.";
    case "auth/user-disabled":
      return "Esta cuenta está deshabilitada.";
    case "auth/too-many-requests":
      return "Demasiados intentos seguidos. Esperá unos minutos y probá de nuevo.";
    case "auth/network-request-failed":
      return "No hay conexión. Revisá internet y probá de nuevo.";
    case "auth/requires-recent-login":
      return "Por seguridad, volvé a escribir la contraseña y probá de nuevo.";
    default:
      return "Algo salió mal (" + ((e && e.code) || "sin código") +
        "). Probá de nuevo más tarde.";
  }
}
