CREATE TABLE IF NOT EXISTS announcements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE announcements ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can view announcements"
  ON announcements
  FOR SELECT
  TO authenticated
  USING (true);

INSERT INTO announcements (title, content) VALUES
  ('Welcome', 'Selamat datang di portal karyawan kami.'),
  ('Meeting', 'Jadwal meeting akan diumumkan.'),
  ('New Benefits', 'Paket tunjangan baru telah tersedia.')
ON CONFLICT DO NOTHING;