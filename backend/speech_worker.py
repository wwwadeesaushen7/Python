"""Run the bundled English recognizer outside the free demo's web process."""
import argparse
import json
from pathlib import Path

from .speech import _offline_transcribe


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('source', type=Path)
    parser.add_argument('output', type=Path)
    parser.add_argument('--start', type=float, default=0)
    parser.add_argument('--end', type=float)
    args = parser.parse_args()
    result = _offline_transcribe(args.source, args.output, args.start, args.end)
    args.output.write_text(json.dumps(result), encoding='utf-8')


if __name__ == '__main__':
    main()
