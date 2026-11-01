# Megha Neelamana · portfolio

A responsive, interactive portfolio for exploring Megha's work through four hiring lenses: AI, data, platform and software engineering. Featured projects include LedgerLens, Folio, LoopLab, TraceScope, DeployPilot, FilingFlow, AeroControl GPUFleetLab, QubitGuard, FrameSight and BioForgeLab.

## Run locally

Run `./run.sh` from any directory to start the site and open it in your browser. It finds an available port from 8000 to 8010. Stop the server with `./run.sh stop`.

## Publish with GitHub Pages

The included GitHub Actions workflow publishes the static site whenever `main` is updated. Create a public GitHub repository for this portfolio, push the `main` branch, then set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**. The deployment URL appears in the workflow run and under **Settings → Pages**. The site deploys the compressed MP4 walkthroughs and omits the original MOV recordings. GPUFleetLab's walkthrough is trimmed to 1:36 and stored at `assets/demos/gpufleetlab.mp4`.

## Site interactions

- Role tabs tailor the framing and project selection.
- Skill tabs filter the full, searchable toolkit by discipline; core skills orbit the portrait.
- Project cards open role-filtered case studies with playable walkthroughs, including GPUFleetLab.
- The résumé is available as a direct download from the hero section.
- Walkthrough clips are short, local recordings of the app flows, stored in `assets/demos/` and embedded in the matching case studies.
- The layout adapts for mobile and supports reduced-motion preferences.

## Add another project

1. Add a project card in `index.html` with its role list in `data-roles`.
2. Add the role mapping in `script.js` and case study data in `cases`.
3. Add an illustration using HTML/CSS to `styles.css` or a new image under `assets/`.
4. Include only verified claims, measured outcomes and links that work.

See `PROJECT_IDEAS.md` for suggested next builds. GPUFleetLab's visible walkthrough demonstrates the fleet overview, capacity, team quotas and cluster inventory; verify implementation details against its repository README before adding further technical claims.

FrameSight demonstrates YOLO11 detection, ByteTrack tracking, OpenCV decoding, Streamlit, WebRTC and Pandas analytics. Its walkthrough is trimmed to exactly 2:35 and stored at `assets/demos/framesight.mp4`.

BioForgeLab adds FASTA analysis, descriptor-based protein-solubility regression and reproducible model comparison. Its full walkthrough is stored at `assets/demos/bioforgelab.mp4`.
