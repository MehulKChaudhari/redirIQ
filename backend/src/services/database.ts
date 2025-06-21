import { Pool } from 'pg';
import { config } from '../config';

export class DatabaseService {
  private pool: Pool;

  constructor() {
    this.pool = new Pool({
      connectionString: config.database.url,
    });
  }

  async saveUrl(slug: string, originalUrl: string): Promise<void> {
    const query = `
      INSERT INTO urls (slug, original_url)
      VALUES ($1, $2)
      ON CONFLICT (slug) DO UPDATE
      SET original_url = $2
    `;

    await this.pool.query(query, [slug, originalUrl]);
  }

  async getUrl(slug: string): Promise<string | null> {
    const query = `
      SELECT original_url
      FROM urls
      WHERE slug = $1
    `;

    const result = await this.pool.query(query, [slug]);
    return result.rows[0]?.original_url || null;
  }
} 