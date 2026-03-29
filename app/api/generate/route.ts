import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY!,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify(body),
  })
  const data = await response.json()
  return NextResponse.json(data)
}
```

**Step 3 — Update the fetch call in M3**
```
In app/platform/modules/[id]/page.tsx, in the M3 component, change the fetch URL in the generate function from:
'https://api.anthropic.com/v1/messages'
to:
'/api/generate'
And remove the headers object entirely from the fetch call since the API route handles authentication.