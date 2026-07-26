-- Blog storage for treder.design.
-- Applied to the Neon project "treder-design"; kept here so the schema is
-- reviewable in the repo and reproducible on a fresh database.

CREATE TABLE IF NOT EXISTS posts (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug         text UNIQUE NOT NULL,
  title        text NOT NULL,
  excerpt      text,
  body_md      text NOT NULL DEFAULT '',
  kind         text NOT NULL DEFAULT 'essay'  CHECK (kind   IN ('essay', 'book-note')),
  status       text NOT NULL DEFAULT 'draft'  CHECK (status IN ('draft', 'published')),
  featured     boolean NOT NULL DEFAULT false,
  tags         text[] NOT NULL DEFAULT '{}',
  cover_image  text,
  read_minutes integer,
  published_at timestamptz,
  created_at   timestamptz NOT NULL DEFAULT now(),
  updated_at   timestamptz NOT NULL DEFAULT now()
);

-- The blog index reads published posts newest-first on every request.
CREATE INDEX IF NOT EXISTS posts_status_published_idx ON posts (status, published_at DESC NULLS LAST);
CREATE INDEX IF NOT EXISTS posts_kind_idx ON posts (kind);

CREATE OR REPLACE FUNCTION set_updated_at() RETURNS trigger AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS posts_set_updated_at ON posts;
CREATE TRIGGER posts_set_updated_at
  BEFORE UPDATE ON posts
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();
