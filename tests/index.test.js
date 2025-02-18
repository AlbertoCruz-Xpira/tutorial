import { fetchBanners } from "../src/pages/index.astro";

test("API devuelve datos válidos", async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () =>
        Promise.resolve({
          docs: [
            {
              image: { url: "/api/media/file/example.png" },
              title: "Título desde API",
              subtitle: "Subtítulo desde API",
              buttonText: "Acción desde API",
            },
          ],
        }),
    })
  );

  const data = await fetchBanners();
  expect(data.title).toBe("Título desde API");
});

test("Fallback al mockup si la API falla", async () => {
  global.fetch = jest.fn(() => Promise.reject(new Error("Error de red")));

  const data = await fetchBanners();
  expect(data.title).toBe("Accede a tu área asegurado");
});
