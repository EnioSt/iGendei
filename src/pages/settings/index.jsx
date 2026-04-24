import { useState } from "react";
import {
  TbLockPassword,
  TbLogout,
  TbShield,
  TbUser,
  TbBell,
} from "react-icons/tb";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ButtonSecondary } from "../../components/ui/button";
import {InputSecondary} from "../../components/forms/input";
import SectionCard from "../../components/forms/sectionCard";
import Toast from "../../components/ui/Toast";

// ─── Reuse your existing primitives ───────────────────────────────────────────

const TitleForm = ({ title, description }) => (
  <div className="flex flex-col gap-1">
    <h2 className="form-title font-bold text-(--foreground)">{title}</h2>
    {description && (
      <p className="text-(--foreground-subtle) text-sm">{description}</p>
    )}
  </div>
);

// ─── Main Settings Page ───────────────────────────────────────────────────────

const Settings = () => {
  const navigate = useNavigate();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [displayName, setDisplayName] = useState("Administrador");
  const [email, setEmail] = useState("admin@igendei.com.br");

  const [notifAgendamentos, setNotifAgendamentos] = useState(true);
  const [notifPagamentos, setNotifPagamentos] = useState(true);
  const [notifCancelamentos, setNotifCancelamentos] = useState(false);

  const [toast, setToast] = useState({ visible: false, message: "" });

  const showToast = (message) => {
    setToast({ visible: true, message });
    setTimeout(() => setToast({ visible: false, message: "" }), 3000);
  };

  const passwordStrength = () => {
    if (!newPassword) return null;
    if (newPassword.length < 6)
      return { label: "Fraca", color: "--card-cancelado", width: "33%" };
    if (newPassword.length < 10)
      return { label: "Média", color: "--card-pendente", width: "66%" };
    return { label: "Forte", color: "--card-money", width: "100%" };
  };

  const strength = passwordStrength();

  const handlePasswordChange = () => {
    if (!currentPassword || !newPassword || !confirmPassword) return;
    if (newPassword !== confirmPassword) {
      showToast("As senhas não coincidem.");
      return;
    }
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    showToast("Senha alterada com sucesso!");
  };

  const handleProfileSave = () => {
    showToast("Perfil atualizado com sucesso!");
  };

  const Toggle = ({ checked, onChange }) => (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={`relative w-11 h-6 rounded-full transition-all duration-(--transition-normal) flex-shrink-0 ${
        checked ? "bg-(--brand-primary)" : "bg-(--background-input)"
      }`}>
      <span
        className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-all duration-(--transition-normal) ${
          checked ? "left-[calc(100%-1.375rem)]" : "left-0.5"
        }`}
      />
    </button>
  );

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col gap-6 pb-10">
      {/* ── Header ── */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <TitleForm
            title="Configurações da Conta"
            description="Gerencie suas informações pessoais, segurança e preferências de notificação"
          />
        </div>
        <ButtonSecondary
          variant="danger"
          onClick={() => {
            navigate("/");
          }}>
          <TbLogout className="text-base" />
          Sair
        </ButtonSecondary>
      </div>

      {/* ── Divider ── */}
      <div className="h-px bg-(--border)" />

      {/* ── Perfil ── */}
      <SectionCard
        icon={<TbUser />}
        title="Informações do Perfil"
        description="Atualize seu nome e endereço de e-mail">
        <div className="flex flex-col gap-4">
          <InputSecondary
            label="Nome de exibição"
            placeholder="Seu nome"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            icon={<TbUser />}
          />
          <InputSecondary
            label="E-mail"
            type="email"
            placeholder="email@igendei.com.br"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="flex justify-end">
            <ButtonSecondary onClick={handleProfileSave}>
              Salvar alterações
            </ButtonSecondary>
          </div>
        </div>
      </SectionCard>

      {/* ── Senha ── */}
      <SectionCard
        icon={<TbShield />}
        title="Segurança"
        description="Altere sua senha de acesso">
        <div className="flex flex-col gap-4">
          <InputSecondary
            label="Senha atual"
            type={showCurrent ? "text" : "password"}
            placeholder="••••••••••••"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            icon={<TbLockPassword />}>
            <button
              type="button"
              onClick={() => setShowCurrent((v) => !v)}
              className="cursor-pointer text-(--foreground-subtle) hover:text-(--foreground) transition-colors">
              {showCurrent ? <FaRegEye /> : <FaRegEyeSlash />}
            </button>
          </InputSecondary>

          <InputSecondary
            label="Nova senha"
            type={showNew ? "text" : "password"}
            placeholder="••••••••••••"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            icon={<TbLockPassword />}>
            <button
              type="button"
              onClick={() => setShowNew((v) => !v)}
              className="cursor-pointer text-(--foreground-subtle) hover:text-(--foreground) transition-colors">
              {showNew ? <FaRegEye /> : <FaRegEyeSlash />}
            </button>
          </InputSecondary>

          {/* Indicador de força */}
          {strength && (
            <div className="flex flex-col gap-1.5">
              <div className="h-1.5 w-full rounded-full bg-(--background-input) overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-(--transition-slow)"
                  style={{
                    width: strength.width,
                    backgroundColor: `var(${strength.color})`,
                  }}
                />
              </div>
              <span
                className="text-xs font-medium"
                style={{ color: `var(${strength.color})` }}>
                Segurança: {strength.label}
              </span>
            </div>
          )}

          <InputSecondary
            label="Confirmar nova senha"
            type={showConfirm ? "text" : "password"}
            placeholder="••••••••••••"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            icon={<TbLockPassword />}>
            <button
              type="button"
              onClick={() => setShowConfirm((v) => !v)}
              className="cursor-pointer text-(--foreground-subtle) hover:text-(--foreground) transition-colors">
              {showConfirm ? <FaRegEye /> : <FaRegEyeSlash />}
            </button>
          </InputSecondary>

          {/* Match feedback */}
          {confirmPassword && newPassword && (
            <span
              className="text-xs font-medium"
              style={{
                color:
                  newPassword === confirmPassword
                    ? "var(--card-money)"
                    : "var(--card-cancelado)",
              }}>
              {newPassword === confirmPassword
                ? "As senhas coincidem"
                : "As senhas não coincidem"}
            </span>
          )}

          <div className="flex justify-end">
            <ButtonSecondary
              onClick={handlePasswordChange}
              disabled={!currentPassword || !newPassword || !confirmPassword}>
              Alterar senha
            </ButtonSecondary>
          </div>
        </div>
      </SectionCard>

      {/* ── Notificações ── */}
      <SectionCard
        icon={<TbBell />}
        title="Notificações"
        description="Escolha quais alertas você deseja receber">
        <div className="flex flex-col divide-y divide-(--border)">
          {[
            {
              label: "Novos agendamentos",
              desc: "Seja avisado ao receber um novo agendamento",
              value: notifAgendamentos,
              set: setNotifAgendamentos,
            },
            {
              label: "Pagamentos confirmados",
              desc: "Alerta quando um pagamento for aprovado",
              value: notifPagamentos,
              set: setNotifPagamentos,
            },
            {
              label: "Cancelamentos",
              desc: "Alerta quando um agendamento for cancelado",
              value: notifCancelamentos,
              set: setNotifCancelamentos,
            },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0">
              <div className="flex flex-col gap-0.5">
                <span className="text-(--foreground) text-sm font-medium">
                  {item.label}
                </span>
                <span className="text-(--foreground-subtle) text-xs">
                  {item.desc}
                </span>
              </div>
              <Toggle checked={item.value} onChange={item.set} />
            </div>
          ))}
        </div>
      </SectionCard>

      {/* ── Toast ── */}
      <Toast message={toast.message} visible={toast.visible} />
    </div>
  );
};

export default Settings;
