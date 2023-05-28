import type { InjectionKey, Ref } from "vue";
import type { TestAppConfig } from "@/config/providers";

export const appConfigKey = Symbol() as InjectionKey<Ref<TestAppConfig>>;
