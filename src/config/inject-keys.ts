import type { InjectionKey, Ref } from "vue";
import type { TestAppConfig } from "@/config/app-providers";

export const appConfigKey = Symbol() as InjectionKey<Ref<TestAppConfig>>;
