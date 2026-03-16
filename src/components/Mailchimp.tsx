"use client";

import { mailchimp } from "@/app/resources";
import { Button, Flex, Heading, Input, Text, Background, Column } from "@/once-ui/components";
import { useState } from "react";

function debounce<T extends (...args: any[]) => void>(func: T, delay: number): T {
  let timeout: ReturnType<typeof setTimeout>;
  return ((...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  }) as T;
}

type NewsletterProps = {
  display: boolean;
  title: string | JSX.Element;
  description: string | JSX.Element;
};

export const Mailchimp = ({ newsletter }: { newsletter: NewsletterProps }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  // Email doğrulama fonksiyonu
  const validateEmail = (value: string): boolean => {
    if (value === "") return true;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(value);
  };

  // Form alanı değiştiğinde hata kontrolü
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    if (!validateEmail(value)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
    }
  };

  // E-posta alanındaki değişiklikleri 2 saniye gecikmeyle değerlendiriyoruz
  const debouncedHandleChange = debounce(handleChange, 2000);

  // Blur (odak kaybı) durumunda son bir kontrol
  const handleBlur = () => {
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
    }
  };

  return (
    <Column
      // Once UI’de overflow="hidden" ve position="relative" props olarak da kullanılabilir.
      // Eğer style üzerinden kesinleştirmek isterseniz şöyle de yapabilirsiniz:
      style={{
        position: "relative",
        overflow: "hidden",
      }}
      overflow="hidden"
      position="relative"
      fillWidth
      padding="xl"
      radius="l"
      marginBottom="m"
      horizontal="center"
      align="center"
      background="surface"
      border="neutral-medium"
    >
      <Background
        // Arka planı tüm Column içerisine sabitliyoruz.
        // width/height değerlerini gradient nesnesinden alıyorsanız,
        // orayı da “100%” vb. şekilde düzenleyebilirsiniz.
        style={{
          pointerEvents: "none",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
        mask={{
          cursor: mailchimp.effects.mask.cursor,
          x: mailchimp.effects.mask.x,
          y: mailchimp.effects.mask.y,
          radius: mailchimp.effects.mask.radius,
        }}
        gradient={{
          display: mailchimp.effects.gradient.display,
          // Eğer gradient genişlik/yükseklik mailchimp.effects.gradient.width/height
          // yüzünden taşma yapıyorsa onları da "100" ya da daha küçük
          // sabit bir değere çekebilirsiniz (piksel veya yüzde).
          x: mailchimp.effects.gradient.x,
          y: mailchimp.effects.gradient.y,
          width: mailchimp.effects.gradient.width,
          height: mailchimp.effects.gradient.height,
          tilt: mailchimp.effects.gradient.tilt,
          colorStart: mailchimp.effects.gradient.colorStart,
          colorEnd: mailchimp.effects.gradient.colorEnd,
          opacity: mailchimp.effects.gradient.opacity as
            | 0
            | 10
            | 20
            | 30
            | 40
            | 50
            | 60
            | 70
            | 80
            | 90
            | 100,
        }}
        dots={{
          display: mailchimp.effects.dots.display,
          color: mailchimp.effects.dots.color,
          size: mailchimp.effects.dots.size as any,
          opacity: mailchimp.effects.dots.opacity as any,
        }}
        grid={{
          display: mailchimp.effects.grid.display,
          color: mailchimp.effects.grid.color,
          width: mailchimp.effects.grid.width as any,
          height: mailchimp.effects.grid.height as any,
          opacity: mailchimp.effects.grid.opacity as any,
        }}
        lines={{
          display: mailchimp.effects.lines.display,
          opacity: mailchimp.effects.lines.opacity as any,
        }}
      />

      <Heading style={{ position: "relative" }} marginBottom="s" variant="display-strong-xs">
        {newsletter.title}
      </Heading>

      <Text
        style={{
          position: "relative",
          maxWidth: "var(--responsive-width-xs)",
        }}
        wrap="balance"
        marginBottom="l"
        onBackground="neutral-medium"
      >
        {newsletter.description}
      </Text>

      <form
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
        action={mailchimp.action}
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
      >
        <Flex id="mc_embed_signup_scroll" fillWidth maxWidth={24} gap="8">
          <Input
            formNoValidate
            labelAsPlaceholder
            id="mce-EMAIL"
            name="EMAIL"
            type="email"
            label="Email"
            required
            onChange={(e) => {
              if (error) {
                handleChange(e);
              } else {
                debouncedHandleChange(e);
              }
            }}
            onBlur={handleBlur}
            errorMessage={error}
          />

          {/* Mailchimp segment ayarı için, görünmez checkbox */}
          <div style={{ display: "none" }}>
            <input
              type="checkbox"
              readOnly
              name="group[3492][1]"
              id="mce-group[3492]-3492-0"
              value=""
              checked
            />
          </div>

          <div id="mce-responses" className="clearfalse">
            <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
            <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
          </div>

          {/* Bot koruması için arkaplanda görünmez input */}
          <div aria-hidden="true" style={{ position: "absolute", left: "-5000px" }}>
            <input
              type="text"
              readOnly
              name="b_c1a5a210340eb6c7bff33b2ba_0462d244aa"
              tabIndex={-1}
              value=""
            />
          </div>

          <div className="clear">
            <Flex height="48" vertical="center">
              <Button id="mc-embedded-subscribe" value="Subscribe" size="m" fillWidth>
                Subscribe
              </Button>
            </Flex>
          </div>
        </Flex>
      </form>
    </Column>
  );
};
